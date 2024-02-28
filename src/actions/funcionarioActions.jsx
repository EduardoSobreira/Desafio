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

export const postFuncionarios = (formulario) => {
    return (dispatch) => {
        dispatch(fetchFuncionariosRequest());
        axios.post('http://localhost:3000/funcionario', formulario)
            .then(response => {
                dispatch(fetchFuncionariosSuccess(response));
            }).catch(error => {
                const errorMsg = error.message;
                dispatch(fetchFuncionariosFailure(errorMsg));
            });
    };
};

export const putFuncionarios = (formulario) => {
    return (dispatch) => {
        dispatch(fetchFuncionariosRequest());
        axios.put('http://localhost:3000/funcionario/' +  formulario['_id'], formulario)
            .then(response => {
                dispatch(fetchFuncionariosSuccess(response));
            }).catch(error => {
            const errorMsg = error.message;
            dispatch(fetchFuncionariosFailure(errorMsg));
        });
    };
};

export const deleteFuncionario = (formulario) => {
    return (dispatch) => {
        dispatch(fetchFuncionariosRequest());
        axios.delete('http://localhost:3000/funcionario/' +  formulario['_id'])
            .then(response => {
                dispatch(fetchFuncionariosSuccess(response));
            }).catch(error => {
            const errorMsg = error.message;
            dispatch(fetchFuncionariosFailure(errorMsg));
        });
    };
};
