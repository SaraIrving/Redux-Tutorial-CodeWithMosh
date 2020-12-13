import { createStore } from "redux";
import reducer from "./reducer";

// the createStore function take the reducer function as an argument
const store = createStore(reducer);

export default store; 
