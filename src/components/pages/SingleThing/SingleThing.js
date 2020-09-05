import React from 'react';
import stuffData from '../../../helpers/data/stuffData';

class SingleThing extends React.Component {
  state = {
    item: {},
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;

    stuffData.getItemById(itemId)
      .then((res) => this.setState({ item: res.data }))
      .catch((err) => console.error('get single item failed', err));
  }

  render() {
    const { item } = this.state;

    return (
      <div className="SingleThing">
        <div className="card mb-3">
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={item.itemImage} className="card-img" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{item.itemName}</h5>
        <p className="card-text">{item.itemDescription}</p>
      </div>
      </div>
    </div>
  </div>
</div>
    );
  }
}

export default SingleThing;
