
import { useRouter } from 'next/router';
import { TaskForm } from '../components/TaskForm';
import store from '../app/store'
import { Provider } from 'react-redux'

import Link from 'next/link'    

export default function Add() {

 

    return (
        <Provider store={store}>
      
            <>
                <h1>Add</h1>
                <TaskForm name="create"/>
                <Link href="/">Home</Link>
            </>
        
        </Provider>
    )
  }
  