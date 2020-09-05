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

deleteItem = (itemId) => {
  itemData.deleteItem(itemId)
    .then(() => this.getItems())
    .catch((err) => console.error('delete item failed', err));
}

render() {
  const { items } = this.state;

  const itemCards = items.map((item) => <ItemCard key={item.id} item={item} deleteItem={this.deleteItem}/>);
  return (
            <div className="Home">
                <h1>Home</h1>
                  {itemCards}
            </div>
  );
}
}

export default Home;
