
import React, {useEffect, useState} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {addTask , updateTask} from '../features/tasks/tasks'

import {v4 as uuidv4} from 'uuid'
import Router from 'next/router';

export const TaskForm = (props) => {
   
    const [task, setTask]= useState({title:"", description:""})
    const dispatch = useDispatch ()

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }
    const currentTasks = useSelector(state => state.tasks)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(task)
        dispatch(addTask({
            ...task,
            id: uuidv4()
        }))
        Router.push('/');
    }
    const handleEditSubmit = (e) => {
        e.preventDefault()
        console.log(task)
        dispatch(updateTask(task))
        Router.push('/');
    }

    useEffect(() => {
        if(props.name === "edit"){
            const found = currentTasks.find(task => task.id == props.id)
            if(found){
                setTask(found)
            }
        }
    }, [])

    return (
        <div>
            {props.name === "create" ? 
            <form onSubmit={handleSubmit}>
                <input type="text" name='title' placeholder="Write a task" onChange={handleChange}/>
                <br/>
                <textarea name='description' placeholder="Write a description" onChange={handleChange}/>
                <button>Save</button>
            </form> : <></>
            }
            {props.name === "edit" ? 
            <form onSubmit={handleEditSubmit}>
                <input type="text" name='title'  placeholder="Write a task" onChange={handleChange} value={task.title}/>
                <br/>
                <textarea name='description'  placeholder="Write a description" onChange={handleChange} value={task.description}/>
                <button>Edit</button>
            </form> : <></>
            }
            
        </div>
    )
}