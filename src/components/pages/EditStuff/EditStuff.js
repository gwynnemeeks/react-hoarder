import React from 'react';

import stuffData from '../../../helpers/data/stuffData';
import authData from '../../../helpers/data/authData';

class EditStuff extends React.Component {
  state = {
    item: {
      itemName: '',
      itemImage: '',
      itemDescription: '',
      uid: authData.getUid(),
    },
  }

  componentDidMount() {
    stuffData.getItemById(this.props.match.params.itemId)
      .then((res) => {
        const item = res.data;
        this.setState({ item });
      })
      .catch((err) => console.warn('err in get single item', err));
  }

changeNameEvent = (e) => {
  e.preventDefault();
  const { item } = this.state;
  item.itemName = e.target.value;
  this.setState({ item });
}

changeImageEvent = (e) => {
  e.preventDefault();
  const { item } = this.state;
  item.itemImage = e.target.value;
  this.setState({ item });
}

changeDescriptionEvent = (e) => {
  e.preventDefault();
  const { item } = this.state;
  item.itemDescription = e.target.value;
  this.setState({ item });
}

updateItem = (e) => {
  e.preventDefault();
  const { itemId } = this.props.match.params;

  stuffData
    .updateItem(itemId, this.state.item)
    .then(() => {
      this.props.history.push(`/items/${itemId}`);
    })
    .catch((err) => console.error('edit stuff broke', err));
};

render() {
  const {
    itemName,
    itemImage,
    itemDescription,
  } = this.state.item;

  return (
        <div className="NewItem col-12">
            <h1>Add Stuff</h1>
            <form className="col-6 offset-3">
              <div className="form-group">
                <label htmlFor="itemName">Item</label>
                <input
                type="text"
                className="form-control"
                id="itemName"
                placeholder="Enter Item Name"
                value={itemName}
                onChange={this.changeNameEvent}
                />
              </div>
              <div className="form-group">
                <label htmlFor="itemImage">Image</label>
                <input
                type="text"
                className="form-control"
                id="itemImage"
                placeholder="Enter Image URL here"
                value={itemImage}
                onChange={this.changeImageEvent}
                />
              </div>
              <div className="form-group">
                <label htmlFor="itemDescription">Item Description</label>
                <input
                type="text"
                className="form-control"
                id="itemDescription"
                placeholder="Enter Item Description"
                value={itemDescription}
                onChange={this.changeDescriptionEvent}
                />
              </div>
              <button className="btn btn-dark" onClick={this.updateItem}>
                Update Item
              </button>
            </form>
        </div>
  );
}
}

export default EditStuff;
