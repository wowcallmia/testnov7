import { combineReducers} from 'redux';
import gifReducer from './gifReducer';
import CurrentGifReducer from './CurrentGifReducer';

export default  combineReducers({gifReducer, CurrentGifReducer});
