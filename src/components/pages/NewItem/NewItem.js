import React from 'react';
// import PropTypes from 'prop-types';

import _ from 'underscore';
import authData from '../../../helpers/data/authData';
import itemData from '../../../helpers/data/stuffData';

class NewItem extends React.Component {
  // static propTypes = {
  //   createItem: PropTypes.func.isRequired,
  // }

  state = {
    itemName: '',
    itemImage: '',
    itemDescription: '',
  }

  changeNameEvent = (e) => {
    e.preventDefault();
    this.setState({ itemName: e.target.value });
  }

  changeImageEvent = (e) => {
    e.preventDefault();
    this.setState({ itemImage: e.target.value });
  }

  changeDescriptionEvent = (e) => {
    e.preventDefault();
    this.setState({ itemDescription: e.target.value });
  }

  saveItem = (e) => {
    e.preventDefault();
    const keysIWant = [
      'itemName',
      'itemImage',
      'itemDescription',
    ];

    const newItem = _(this.state, keysIWant);
    newItem.uid = authData.getUid();

    itemData
      .createItem(newItem)
      .then((res) => {
        this.props.history.push(`/items/${res.data.name}`);
      })
      .catch((err) => console.error('new item borked', err));
  };

  render() {
    const {
      itemName,
      itemImage,
      itemDescription,
    } = this.state;

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
                  <button className="btn btn-dark" onClick={this.saveItem}>
                    Save Item
                  </button>
                </form>
            </div>
    );
  }
}

export default NewItem;
