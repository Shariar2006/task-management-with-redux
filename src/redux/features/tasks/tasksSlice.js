import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
};

const tasksSlice = createSlice({
    name: 'tasksSlice',
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            if(state.tasks.length === 0){
                state.tasks.push({id: 1, ...payload})
            }else{
                const laseElement = state.tasks.at(-1);
                state.tasks.push({id: laseElement.id + 1, ...payload})

            }
        }
    }
});

export const {addTask} = tasksSlice.actions;

export default tasksSlice.reducer