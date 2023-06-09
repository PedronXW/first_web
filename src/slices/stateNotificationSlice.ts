import { createSlice } from "@reduxjs/toolkit";

const notificationInitialState={
    state:false
}

const stateNotificationSlice = createSlice({
    name:"notification",
    initialState: notificationInitialState,
    reducers:{
        removeNotification(state){
            state.state = false
        },
        addNotification(state){
            state.state = true
        }
    }
});

export const { removeNotification, addNotification } = stateNotificationSlice.actions;

export default stateNotificationSlice.reducer;