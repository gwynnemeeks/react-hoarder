import React from 'react';
import { Link } from 'react-router-dom';

import itemShape from '../../../helpers/propz/itemShape';

class ItemCard extends React.Component {
    static propTypes = {
      item: itemShape.itemShape,
    }

    render() {
      const { item } = this.props;

      const singleItemLink = `/items/${item.id}`;
      const editLink = `/edit/${item.id}`;

      return (
<div className="card mb-3">
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={item.itemImage} className="card-img" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{item.itemName}</h5>
        <p className="card-text">{item.itemDescription}</p>
        <Link to={singleItemLink} className="btn btn-warning"><i className="fas fa-binoculars fa-lg"></i></Link>
        <Link to={editLink} className="btn btn-success"><i className="fas fa-pencil-alt fa-lg"></i></Link>
       </div>
    </div>
  </div>
</div>

      );
    }
}

export default ItemCard;
