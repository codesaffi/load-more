FIRST IMPORT REACT AND USE STATE FROM REACT AND STYLE FILE


    import React, { useState } from 'react';
    import './index.css';


    
NOW CREATE YOUR DATA LIKE THIS


  const initialData = [
  
    { id: 1, name: 'Apple', description: 'A sweet red fruit', image: 'https://via.placeholder.com/150' },
    
    { id: 2, name: 'Banana', description: 'A long yellow fruit', image: 'https://via.placeholder.com/150' },
    
    { id: 3, name: 'Orange', description: 'A round orange fruit', image: 'https://via.placeholder.com/150' },
    
    { id: 4, name: 'Pineapple', description: 'A tropical fruit with spiky skin', image: 'https://via.placeholder.com/150' },
    
    { id: 5, name: 'Strawberry', description: 'A small red fruit with seeds on the outside', image:
    
    'https://via.placeholder.com/150' },

        
    { id: 6, name: 'Orange', description: 'A round orange fruit', image: 'https://via.placeholder.com/150' },
    
    { id: 7, name: 'Pineapple', description: 'A tropical fruit with spiky skin', image: 'https://via.placeholder.com/150' },
    
    { id: 7, name: 'Strawberry', description: 'A small red fruit with seeds on the outside', image:
    
    'https://via.placeholder.com/150' },
    
  ];



  NOW CREATE A USESTATE VARIABLE WHICH WILL BE USED TO STORE THE NUMBER OF VALUES THAT WILL BE SHOWED ON SCREEN INITIALIZE 

    const [visibleItems, setVisibleItems] = useState(4);





NOW CREATE A FUNCTION THE FUNCTION WILL BE RUN WHEN LOADMORE BUTTON IS CLICKED 
THE PURPOSE OF THE FUNCTION IS IT WILL ADD THE VALUES BY 4 IN THE ORIGINAL VALUE DISPLAYED
IT WILL USE THE USE STATE VARIABLE TO CHANGES THE NUMBER OF VALUES



  const loadMoreItems = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 4); // Increase visible items by 4
  };



THE COMPONENT RENDERS 4 VALUES INITIALLY AND ON CLICKING THE BUTTON IT WILL ADD 4 MORE VALUES AND DISPLAY THEM ON SCREEN


div className="app-container"
      div className="item-list"
        {initialData.slice(0, visibleItems).map(item => (
          div key={item.id} className="result-item"
          img src={item.image} alt={item.name} 
          div className="result-info"
            h3{item.name}h3
            p{item.description}p
          div
        div
        ))}
      div
      {visibleItems < initialData.length && (
        button className="load-more-btn" onClick={loadMoreItems}>Load More button
      )}
    div
    


initialData.slice(0, visibleItems):
 This expression slices the initialData array to display only the first visibleItems number of items. Initially, visibleItems is set to 4.
 


.map(item => (div key={item.id} className="result-item"
          img src={item.image} alt={item.name} 
          div className="result-info"
            h3{item.name}h3
            p{item.description}p
          div
        div)):


 Maps over the sliced array (initialData.slice(0, visibleItems)) and renders an element for each item. Each item is rendered with its name as the content and key attribute set to item.id for React's internal reconciliation.