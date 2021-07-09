import { combineReducers } from "redux";
import todo from "./modules/todo";
import score from "./modules/score";

export default combineReducers({
    todo,
    score,
});

// const rootReducer = {
//     todo: {

//     }
// };
