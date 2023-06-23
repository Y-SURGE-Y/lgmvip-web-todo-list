import React from "react";
import {useState} from "react";
import ToDoForm from './ToDoForm'
import ToDo from "./ToDo";

export default function ToDoList() {


    const [todos,setTodos] = useState([]);


    //Add a ToDo to a List
    const addTask = task => {
        if (!task.text){
            return
        }

        const newTodos = [task,...todos];
        setTodos(newTodos);
    }

    //Remove a ToDo from a List
    const removeTask = id => {
        let updatedTasks = [...todos].filter(task => task.id !== id)
        setTodos(updatedTasks)

    }


    //Task is Completed

    const completeTask = id => {
        let updatedTasks = todos.map(todo => {
            if (todo.id === id){
                todo.isComplete = true;
            }
            return todo;
        })
        setTodos(updatedTasks)
    }


    return <div>
        <ToDoForm addTask={addTask}></ToDoForm>
        <ToDo todos ={todos} completeTask ={completeTask} removeTask={removeTask}></ToDo>
    </div>
}