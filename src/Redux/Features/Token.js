import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const token1 = Cookies.get('token')
export const TokenSlice = createSlice({
    name: 'token',
    initialState: {
        token: token1 !== undefined ? token1 :  ''
    },
    reducers: {
        addToken: (state, action) => {
            state.token = action.payload
        },
        removeToken: (state, action) => {
            state.token = ''
        }
    }
})

export const {addToken,removeToken} = TokenSlice.actions
export default TokenSlice.reducer