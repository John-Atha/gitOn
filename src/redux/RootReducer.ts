import { combineReducers } from "@reduxjs/toolkit";
import dialogSlice from "./slices/dialogSlice";
import snackMessageSlice from "./slices/snackMessageSlice";

const RootReducer = combineReducers({
    dialog: dialogSlice,
    snackMessage: snackMessageSlice,
})

export default RootReducer;
