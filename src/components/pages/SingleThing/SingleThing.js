import React, { useState, useEffect } from 'react';

import stuffData from '../../../helpers/data/stuffData';

const SingleThing = (props) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const { itemId } = props.match.params;

    stuffData.getItemById(itemId)
      .then((res) => setItem(res.data))
      .catch((err) => console.error('get single item failed', err));
  }, [props.match.params]);

  const deleteItem = () => {
    const { itemId } = props.match.params;
    stuffData.deleteItem(itemId)
      .then(() => props.history.push('/home'))
      .catch((err) => console.error('delete single item forked', err));
  };

  return (
      <div className="SingleThing">
        <h1>{item.itemName}</h1>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
            <img src={item.itemImage} className="card-img" alt="..." />
          </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.itemName}</h5>
            <p className="card-text">{item.itemDescription}</p>
            <button className="btn btn-danger" onClick={deleteItem}><i className="fas fa-trash-alt"></i></button>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default SingleThing;
