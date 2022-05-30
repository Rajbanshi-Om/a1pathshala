import { createSlice } from "@reduxjs/toolkit";
export const DashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
      value: []
    },
    reducers: {
        addData: (state, action) => {
            state.value.push(action.payload)
        },
        deleteData: (state, action) => {
            state.value = state.value.filter((val) => val.id !== action.payload.id)
        },
        updateData: (state, action) => {
            state.value.map((val) => {
                if (val.id === action.payload.id) {
                    val.name = action.payload.name
                }
                return;
            })
            
        }
    }

})

export const { addData,deleteData,updateData } = DashboardSlice.actions

export default DashboardSlice.reducer