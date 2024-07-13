import { combineReducers } from "redux";
import reducer1 from "./reducer1";
import reducer2 from "./reducer2";


const rootReducer=combineReducers({namereducer:reducer1,emailreducer:reducer2})

export default rootReducer;