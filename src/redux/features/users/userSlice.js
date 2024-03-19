import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'Shariar Alam Emon',
};

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        doneStatus: (state, { payload }) => {
            const target = state.userTasks.find((item) => item.id === payload)
            target.status = "done"
        },
    }
});

export const {  doneStatus } = usersSlice.actions;

export default usersSlice.reducer