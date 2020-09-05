import React from 'react';

import authData from '../../../helpers/data/authData';
import itemData from '../../../helpers/data/stuffData';
import ItemCard from '../../shared/ItemCard/ItemCard';

class Home extends React.Component {
state = {
  items: [],
}

getItems = () => {
  itemData.getItemsByUid(authData.getUid())
    .then((items) => this.setState({ items }))
    .catch((err) => console.error('get items sucked', err));
}

componentDidMount() {
  this.getItems();
}

render() {
  const { items } = this.state;

  const itemCards = items.map((item) => <ItemCard key={item.id} item={item}/>);
  return (
            <div className="Home">
                <h1>Home</h1>
                  {itemCards}
            </div>
  );
}
}

export default Home;
