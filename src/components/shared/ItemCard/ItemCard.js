import React from 'react';

import itemShape from '../../../helpers/propz/itemShape';

class ItemCard extends React.Component {
    static propTypes = {
      item: itemShape.itemShape,
    }

    render() {
      const { item } = this.props;

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
       </div>
    </div>
  </div>
</div>

      );
    }
}

export default ItemCard;
