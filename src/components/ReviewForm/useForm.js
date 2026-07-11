import { useReducer } from 'react';

const INICIAL_STATE = {name: "", text: "", rating: 1};

const SET_CLEAR_ACTION = "SET_CLEAR_ACTION";
const SET_NAME_ACTION = "SET_NAME_ACTION";
const SET_TEXT_ACTION = "SET_TEXT_ACTION";
const SET_RATING_ACTION = "SET_RATING_ACTION";

const reducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case SET_CLEAR_ACTION:
            return {...INICIAL_STATE};
        case SET_NAME_ACTION:
            return {...state, name: payload};
        case SET_TEXT_ACTION:
            return {...state, text: payload};
        case SET_RATING_ACTION:
            return {...state, rating: payload};
        default:
            return state;
    }
};


export const useForm = () => {
    const [form, dispatch ] = useReducer(reducer, INICIAL_STATE);
    
    const setClear = () => 
        dispatch({ type: SET_CLEAR_ACTION }); 
    const setName = (value) => 
        dispatch({type: SET_NAME_ACTION, payload: value});
    const setText = (value) => 
        dispatch({type: SET_TEXT_ACTION, payload: value});
    const setRating = (value) => 
        dispatch({type: SET_RATING_ACTION, payload: value});
    
    return {form, setClear, setName, setText, setRating};
}