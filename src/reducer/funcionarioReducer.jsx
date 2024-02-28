import {
    FETCH_FUNCIONARIOS_FAILURE,
    FETCH_FUNCIONARIOS_REQUEST,
    FETCH_FUNCIONARIOS_SUCCESS
} from '../actions/funcionarioActions';

const initialState = {
    loading: false,
    funcionarios: [],
    error: ''
};

const funcionarioReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_FUNCIONARIOS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_FUNCIONARIOS_SUCCESS:
            return {
                loading: false,
                funcionarios: action.payload,
                error: ''
            };
        case FETCH_FUNCIONARIOS_FAILURE:
            return {
                loading: false,
                funcionarios: [],
                error: action.payload
            };
        default:
            return state;
    }
};

export default funcionarioReducer;
