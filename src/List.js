import React from 'react'
import './App.css';
function List({itemList, updateItemList, itemObj}) {

      
    const deleteItemsFromList = (key) =>{
     const newList = itemList.filter((itemObj)=>{
       return itemObj.keys !== key;
      });
      updateItemList(newList);
    }

    const newStatus = (key, e) => {

      const newList = itemList.filter((itemObj)=>{
          return itemObj.keys !== key.keys;
         });
         updateItemList([...newList, { currentItem: key.currentItem , currentStatus: e.target.value , keys: key.keys }]);
  
         }
  return (
    <div> 
    <div key={itemObj.key} className="Task-List"> 
    <p className="Para">{itemObj.currentItem}</p>
    <p  className="Para">{itemObj.currentStatus}</p>
    <select onChange={(e) => newStatus(itemObj,e)}>
      <option value="Pending">Pending</option>
      <option value="In Progress">In Progress</option>
      <option value="Done">Done</option>
      </select>
    <button onClick={() => deleteItemsFromList (itemObj.keys)}>x</button>
   
    </div>
  
    </div>
  )
}

export default List;