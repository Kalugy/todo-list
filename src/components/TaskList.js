

import {useDispatch, useSelector} from 'react-redux'
import {deleteTask} from '../features/tasks/tasks'


import Link from 'next/link'    


export const TaskList = () => {
    const tasks=useSelector(state => state.tasks)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
        console.log(id)
    }

    return (
        <div className='m-2'>
            <div className='flex gap-5 justify-around'>
                <h1 className='font-bold py-2 underline'>Task List #{tasks.length}</h1>
                <Link href="/add" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 shadow-md rounded">New Task</Link>
            </div>
            <br/>
            <div className='flex flex-row flex-wrap gap-2 md:gap-8 justify-around py-2 px-2 md:px-16'>
                {tasks.map(task => (
                    <div className='flex-column flex-grow gap-3 bg-cyan-100 py-2 px-2 shadow-md' key={task.id}>
                        
                        <h3 className='bg-gray-200 py-1 px-1 border-1 shadow-md'>Title: {task.title}</h3>
                        <p className='bg-gray-200 my-2 px-1 border-1 shadow-md'>Description: {task.description}</p> 
                        <button className="bg-red-500 hover:bg-red-700 text-white text-xs font-bold py-1 px-1 mx-1 shadow-md rounded"  onClick={() => handleDelete(task.id)}>Delete</button>
                        <Link className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-1 mx-1 shadow-md rounded" href={"/edit/"+task.id} >Edit</Link>
                    </div>
                ))}
            </div>
            
        </div>
    )
}