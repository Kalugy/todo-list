import { configureStore } from '@reduxjs/toolkit'

import {taskReducer} from '../features/tasks/tasks'

export default configureStore({
  reducer: {
    tasks:taskReducer
  },
})
