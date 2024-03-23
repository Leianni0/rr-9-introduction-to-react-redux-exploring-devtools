import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.items.push(action.payload);
        },
        removeOne: (state, action) => {
            const index = action.payload;
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        },
        clearTodo: (state) => {
            state.items = [];
        }
    }
});

export const { addTodo, removeOne, clearTodo } = todoSlice.actions;

export default todoSlice.reducer;
