import React, {useState, useSyncExternalStore}from "react";

export const EditToDoForm = ({editToDo, task}) => {
    const [value, setValue] = useState (task.task)

    const handleSubmit = e =>{
        e.preventDefault(); 
        
        editToDo(value, task.id)

        setValue ('')
    }

    return (
        <form className= 'ToDoForm' onSubmit={handleSubmit}> 
            <input type= "text" className='todo-input' value=
            {value} placeholder='Update task' onChange={(e) => setValue(e.target.value)}/>
            <button type= 'submit' className="todo-btn">Update Task</button>
        </form>
    )
}

export default EditToDoForm;