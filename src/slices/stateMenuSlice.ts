import { createSlice } from "@reduxjs/toolkit";

const menuInitialState={
    state:false
}

const stateMenuSlice = createSlice({
    name:"menu",
    initialState: menuInitialState,
    reducers:{
        changeMenuState(state){
            state.state = !state.state
        }
    }
});

export const { changeMenuState } = stateMenuSlice.actions;

export default stateMenuSlice.reducer;