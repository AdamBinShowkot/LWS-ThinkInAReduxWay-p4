import { combineReducers } from "redux";
import productsReducer from './products/reducer';
import filterReducer from './filters/reducer';

const rootReducer=combineReducers({
    product:productsReducer,
    filter:filterReducer
})

export default rootReducer;