import { useState } from 'react';
// import List from './List';
import './App.css';
import Filterr from './Filterr';

function App() {
  const [currentItem, setCurrentItem] =useState(null);
  const [itemList, updateItemList] = useState([]);
  const [status,setStatus] = useState('');
  const [filter,setFilter] = useState({
    pending: true,
    inProgress: true,
    done: true,
  });
    

  const onChangeHandler =(e)=>{
    console.log("current value",e.target.value)
    setCurrentItem(e.target.value);
  };
  const addItemToList = () =>{
    updateItemList([...itemList, {currentItem: currentItem , currentStatus: status , keys: Date.now()}]);
    console.log("List Items", itemList);
    setCurrentItem('');
  }
  return (
   
    <div className="App">
    <div className="App-header" >
    <div className="Container">
    <h3 className="Heading">To Do App</h3>
    <p className="Para">Filter Tasks</p>
    <input type="checkbox" id="pending" name="pending"  value={filter.pending} onChange={(e) => setFilter({...filter, pending: !filter.pending})} defaultChecked  />
    <label for="pending" className="Label">Pending</label>
    <input type="checkbox" id="inProgress" name="inProgress" value={filter.inProgress} onChange={(e) => setFilter({...filter, inProgress: !filter.inProgress})} defaultChecked  />
    <label for="inProgress" className="Label">In Progress</label>
    <input type="checkbox" id="done" name="done" value={filter.done} onChange={(e) => setFilter({...filter, done: !filter.done})} defaultChecked />
    <label for="done" className="Label">Done</label>
    <p className="Para2">Add New Task</p>
    <div class="Input-wrapper">
    <input placeholder="Add Task" value={currentItem} onChange={onChangeHandler} />
    <select className="Select" onChange={(e) => setStatus(e.target.value)}>
    <option value="Pending" >Pending</option>
    <option value="In Progress">In Progress</option>
    <option value="Done">Done</option>
    </select>
    <button onClick={addItemToList} disabled={!currentItem} >+</button>
    </div>
    {/* <List itemList={itemList} updateItemList={updateItemList} /> */}
    <Filterr itemList={itemList} updateItemList={updateItemList} filter ={filter}                     />
   
    </div>
  </div> </div>
  
  );
}

export default App;
