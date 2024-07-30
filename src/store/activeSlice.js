import { createSlice } from "@reduxjs/toolkit"

const activeSlice = createSlice({
    name: 'active',
    initialState: {
        toggle: false,
        number: 1
    },
    reducers:{
        changeToggleAction: (state, action) => {
            state.toggle = !state.toggle
        },
        changeIncreaseAction: (state, action) => {
            state.number = state.number + 1
        }
    }
});

export const {changeToggleAction, changeIncreaseAction} = activeSlice.actions;
export default activeSlice.reducer;