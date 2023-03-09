// export const  addCart ="addCart"
// export const delCart="delCart"
import { createStore } from "redux";
import rootReducers from "./reducer";

const store = createStore(rootReducers);


export default store;
