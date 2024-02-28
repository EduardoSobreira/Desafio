import axios from 'axios';

export const FETCH_FUNCIONARIOS_REQUEST = 'FETCH_FUNCIONARIOS_REQUEST';
export const FETCH_FUNCIONARIOS_SUCCESS = 'FETCH_FUNCIONARIOS_SUCCESS';
export const FETCH_FUNCIONARIOS_FAILURE = 'FETCH_FUNCIONARIOS_FAILURE';

export const fetchFuncionariosRequest = () => ({
    type: FETCH_FUNCIONARIOS_REQUEST
});

export const fetchFuncionariosSuccess = (funcionarios) => ({
    type: FETCH_FUNCIONARIOS_SUCCESS,
    payload: funcionarios
});

export const fetchFuncionariosFailure = (error) => ({
    type: FETCH_FUNCIONARIOS_FAILURE,
    payload: error
});

export const fetchFuncionarios = () => {
    return (dispatch) => {
        dispatch(fetchFuncionariosRequest());
        axios.get('http://localhost:3000/funcionario')
            .then(response => {
                const funcionarios = response.data;
                dispatch(fetchFuncionariosSuccess(funcionarios));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchFuncionariosFailure(errorMsg));
            });
    };
};
