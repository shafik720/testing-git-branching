
// const counterReducer = require('@reduxjs/toolkit');

const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    count : 0
}

const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increment : (state, action) => {
            state.count++
        },
        decrement : (state, action) => {
            state.count--
        }
    }
})


modules.exports = counterSlice.reducer;
modules.exports.counterActions = counterSlice.actions;