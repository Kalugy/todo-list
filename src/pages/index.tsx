import Image from 'next/image'
import { Inter } from 'next/font/google'


import store from '../app/store'
import { Provider } from 'react-redux'

import { TaskForm } from '../components/TaskForm'
import { TaskList } from '../components/TaskList'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (
    <Provider store={store}>
      <main>
        
        <TaskList />
      </main>
    </Provider>
  )
}
