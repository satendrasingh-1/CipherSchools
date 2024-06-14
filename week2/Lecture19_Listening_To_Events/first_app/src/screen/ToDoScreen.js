import { Component } from "react";

class ToDoScreen extends Component {
    state={
        taskcount: 0,
    };
    render(){
        return(
            <div className="screen">
                <h1 className="ui heading center">To Do List</h1>
                <div onClick={(e)=>{
                    this.setState({
                        ...this.state, 
                        taskcount: this.state.taskcount+1,
                    })
                    console.log(this.state.taskcount);
                }}
                className="ui secondary button">
                    Add Task
                </div>
                <p>The number of button clicked: {this.state.taskcount}</p>
            </div>
        );
    }
}

export default ToDoScreen;