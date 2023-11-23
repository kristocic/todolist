import React, {useState} from "react";
import ToDoForm from "./ToDoForm"
import { v4 as uuidv4} from 'uuid';
import  ToDo  from "./Todo";
import  EditToDoForm  from "./EditToDoForm"
uuidv4();



export const ToDoWrapper = () => {
    const [todos, setTodos] = useState ([])
    

    const addToDo = todo => {
        setTodos ([...todos,{id: uuidv4(), task: todo, 
        completed: false, isEditing: false}])
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...
        todo, completed: !todo.completed}: todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo=> todo.id !==id))
    }


    const editToDo = id => {
        setTodos (todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo))
    }

    const editTask = (task, id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
          )
        );
      };

      
    return (
        <div className="TodoWrapper">
          <h1>Get Things Done !</h1>
          <ToDoForm addToDo={addToDo} />
          {todos.map((todo) =>
            todo.isEditing ? (
              <EditToDoForm editToDo={editTask} task={todo} />
            ) : (
              <ToDo
                key={todo.id}
                task={todo}
                deleteTodo={deleteTodo}
                editToDo={editToDo}
                toggleComplete={toggleComplete}
              />
            )
          )}
        </div>
      );
    };

  