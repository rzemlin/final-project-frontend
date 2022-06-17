import { combineReducers } from 'redux'
import commentReducer from "./commentReducer";
import userReducer from "./userReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
    commentReducer, userReducer, postReducer
})

export default rootReducer

