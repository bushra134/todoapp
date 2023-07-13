import './App.css';
import List from './List';


function Filterr({itemList, updateItemList , filter}){

const pending = filter.pending;
const inProgress = filter.inProgress;
const done = filter.done;
       return(
           <div>
            {
                itemList.map((itemObj) => { 
                     if (pending === true && inProgress === true && done === true)
                     {
                 if (itemObj.currentStatus === "Pending" || "In Progress" || "Done")
                 {
                return(
                <List itemObj={itemObj} itemList={itemList} updateItemList={updateItemList}/>);
                    }}

                    else if (pending === true && inProgress === true && done === false)
                    {
                        if (itemObj.currentStatus !== "Done"){
                            return(
                            <List itemObj={itemObj} itemList={itemList} updateItemList={updateItemList}/>);
                    }}

                    else if (pending === true && inProgress === false && done === true){
                        if (itemObj.currentStatus !== "In Progress"){
                            return(
                            <List itemObj={itemObj} itemList={itemList} updateItemList={updateItemList}/>);
                    }}

                    else if (pending === false && inProgress === true && done === true){
                        if (itemObj.currentStatus !== "Pending"){
                            return(
                               <List itemObj={itemObj} itemList={itemList} updateItemList={updateItemList}/>);
                    }}

                    else if (pending === true && inProgress === false && done === false){
                        if (itemObj.currentStatus === "Pending"){
                            return(
                             <List itemObj={itemObj} itemList={itemList} updateItemList={updateItemList}/>);
                    }}

                    else if (pending === false && inProgress === true && done === false){
                        if (itemObj.currentStatus === "In Progress"){
                            return(<List itemObj={itemObj} itemList={itemList} updateItemList={updateItemList}/>);
                    }}

                    else if (pending === false && inProgress === false && done === true){
                        if (itemObj.currentStatus === "Done"){
                            return(
                            <List itemObj={itemObj} itemList={itemList} updateItemList={updateItemList}/>);
                    }}

                    else {
                    return(
                    <div></div>
                    )}

                })
            }
        </div>
       );

}

export default Filterr;
