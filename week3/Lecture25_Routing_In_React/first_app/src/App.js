import { useState } from "react";
import AddTask from "./component/AddTask";
import ToDoScreen from "./screen/ToDoScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
    {
        path:'/',
        element: <ToDoScreen></ToDoScreen>
    },
    {
        path:"/add-task",
        element: <AddTask></AddTask>
    }
])
function App(){

    const [task, setTask]=useState([]);
    return(
        <RouterProvider router={router}/>
    )
}

export default App;