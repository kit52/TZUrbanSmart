import { combineReducers, createStore } from "redux";
import reducer from '../redux/reducer/index';
let reducers = combineReducers({
    page: reducer,
});

const store = createStore(reducers)
export default store