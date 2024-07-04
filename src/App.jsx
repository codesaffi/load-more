import React, { useState } from 'react';
import './index.css';

const initialData = [
  { id: 1, name: 'Apple', description: 'A sweet red fruit', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Banana', description: 'A long yellow fruit', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Orange', description: 'A round orange fruit', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Pineapple', description: 'A tropical fruit with spiky skin', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Strawberry', description: 'A small red fruit with seeds on the outside', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Orange', description: 'A round orange fruit', image: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Pineapple', description: 'A tropical fruit with spiky skin', image: 'https://via.placeholder.com/150' },
  { id: 8, name: 'Strawberry', description: 'A small red fruit with seeds on the outside', image: 'https://via.placeholder.com/150' },
];


function App() {

  const [visibleItems, setVisibleItems] = useState(4);

  const loadMoreItems = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 4); // Increase visible items by 4
  };



  return (
    <>

<div className="app-container">
      <div className="item-list">
        {initialData.slice(0, visibleItems).map(item => (
          <div key={item.id} className="result-item">
          <img src={item.image} alt={item.name} />
          <div className="result-info">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        </div>
        ))}
      </div>
      {visibleItems < initialData.length && (
        <button className="load-more-btn" onClick={loadMoreItems}>Load More</button>
      )}
    </div>

    </>
  )
}

export default App