import { createSlice } from '@reduxjs/toolkit'


const initialState = [
    {id:1, title:'Task 1', description:'description 1', completed:false},
    {id:2, title:'Task 2', description:'description 2',completed:false},
]

export const counterSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{
        addTask: (state, action) => {
            state.push(action.payload)
            //[action.payload, ...state]
        },
        deleteTask: (state, action) => {
            const found = state.find(task => task.id === action.payload)
            if(found){
                state.splice(state.indexOf(found), 1)
            }
        },
        updateTask: (state, action) => {
            const {id, title, description} = action.payload
            const found = state.find(task => task.id === id)
            if(found){
                found.title = title
                found.description = description
            }
        }
    }
})

export const {addTask, deleteTask, updateTask} = counterSlice.actions

export const taskReducer = counterSlice.reducer