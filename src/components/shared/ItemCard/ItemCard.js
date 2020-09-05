import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import itemShape from '../../../helpers/propz/itemShape';

const ItemCard = (props) => {
  const { item, deleteItem } = props;

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
              <div className="btn-group">
                <Link to={singleItemLink} className="btn btn-warning"><i className="fas fa-binoculars fa-lg"></i></Link>
                <Link to={editLink} className="btn btn-success"><i className="fas fa-pencil-alt fa-lg"></i></Link>
                <button className="btn btn-danger" onClick={() => { deleteItem(item.id); }}><i className="fas fa-trash-alt fa-lg"></i></button>
              </div>
              </div>
              </div>
              </div>
              </div>
  );
};

ItemCard.propTypes = {
  item: itemShape.itemShape,
  deleteItem: PropTypes.func.isRequired,
};

export default ItemCard;
