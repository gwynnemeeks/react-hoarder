import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  editItemEvent = (e) => {
    e.preventDefault();
    const itemId = 'coolThing01';
    this.props.history.push(`/edit/${itemId}`);
  }

  render() {
    return (
            <div className="Home">
                <h1>Home</h1>
                <button className="btn btn-dark" onClick={this.editItemEvent}>Edit</button>
                <Link to='/new'>New Item</Link>
                <h2>Here is a link to a <Link to='/item/item01'>Specific Item</Link></h2>
            </div>
    );
  }
}

export default Home;
