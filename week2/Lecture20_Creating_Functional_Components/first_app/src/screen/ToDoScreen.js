import {useState} from "react";
import Task from "./Component";

function ToDoScreen(){
    const [taskList, setTaskList]= useState([]);
    return(
        <div className="screen">
                <h1 className="ui heading center">To Do List</h1>
                <div onClick={(e)=>{
                    setTaskList([
                        ...taskList,
                        {
                            title: "Go Mandir",
                            Description: "To worship God",
                        }
                    ]);
                    console.log(taskList);
                }}
                className="ui secondary button">
                    Add Task
                </div>
                {taskList.map((task) => (<Task/>))}
            </div>
    );
}
export default ToDoScreen;