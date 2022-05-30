import { createSlice } from "@reduxjs/toolkit";

export const ToggleSlice = createSlice({
    name: 'toggle',
    initialState: {
        toggleValue : true
    },
    reducers: {
        isToggle: (state,action) => {
            state.toggleValue = action.payload 
        }
    }
})


export const { isToggle} = ToggleSlice.actions
export default ToggleSlice.reducer