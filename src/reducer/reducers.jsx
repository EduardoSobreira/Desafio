import { combineReducers } from 'redux';
import funcionarioReducer from '../reducer/funcionarioReducer';

const rootReducer = combineReducers({
    funcionario: funcionarioReducer
});

export default rootReducer;
