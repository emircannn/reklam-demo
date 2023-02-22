import { combineReducers } from 'redux';
import cartSlice from './cartSlice';

const rootReducer = combineReducers({
    cartSlice: cartSlice,
});

export default rootReducer;