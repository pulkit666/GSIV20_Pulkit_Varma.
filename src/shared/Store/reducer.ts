import * as actionTypes from './types';

const initialState = {
    filterType: ''
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.SET_FILTER_TYPE:
            return {
                ...state,
                filterType: action.payload
            };
        default:
            return state;
    }
}

export default reducer;