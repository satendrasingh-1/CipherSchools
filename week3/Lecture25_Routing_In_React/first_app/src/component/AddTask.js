import { useState } from "react";
import React from 'react';
// import ToDoScreen from "../screen/ToDoScreen";

function AddTask({onSubmit}){
    const [task, setTask] = useState({
        title:"",
        description:"",
    });


    let handelInputChange = (e)=>{
        setTask({
            ...task, 
            [e.target.name]: e.target.value
        });
    }

    let onFormSubmit=(e)=>{
        e.preventDefault();
        console.log(task);
        onSubmit(task);
    }

    return(
        <section className="screen">
            
            <h3 className="center">Add New Task</h3>
            <div className="ui form">
                <form onSubmit={onFormSubmit}>
                    <div className="field">
                        <label>Title</label>
                        <input type="text" 
                            spellCheck={false}
                            data-ms-editor={true}
                            placeholder="Task title" 
                            name="title"
                            onChange={handelInputChange}
                            value = {task.title}
                        />
                    </div>
                    <div className="field">
                        <label>Description</label>
                        <textarea rows="2" 
                            spellCheck={false}
                            data-ms-editor={true}
                            placeholder="Description" 
                            name="description"
                            onChange={handelInputChange}
                            value = {task.description}
                        />
                    </div>
                    <button type="submit" className="ui primary button">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}


export default AddTask;


// import React, { useState } from 'react';
// import { Button, Form, Container } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';

// function AddTask() {
//     const [task, setTask] = useState({
//         title: "",
//         description: "",
//     });

//     let handleInputChange = (e) => {
//         setTask({
//             ...task, 
//             [e.target.name]: e.target.value
//         });
//     }

//     let onFormSubmit = (e) => {
//         e.preventDefault(); // Fix typo from `e.preventDefalut();`
//         console.log(task);
//     }

//     return (
//         <Container style={{ marginTop: '20px' }}>
//             <h3 className="ui center aligned header">Add New Task</h3>
//             <Form onSubmit={onFormSubmit}>
//                 <Form.Field>
//                     <label>Title</label>
//                     <input type="text" 
//                         placeholder="Task title" 
//                         name="title"
//                         onChange={handleInputChange}
//                     />
//                 </Form.Field>
//                 <Form.Field>
//                     <label>Description</label>
//                     <textarea rows="2" 
//                         placeholder="Description" 
//                         name="description"
//                         onChange={handleInputChange}
//                     />
//                 </Form.Field>
//                 <Button type="submit" primary>
//                     Submit
//                 </Button>
//             </Form>
//         </Container>
//     );
// }

// export default AddTask;