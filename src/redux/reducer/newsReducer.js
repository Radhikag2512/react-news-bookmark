import { ActionTypes } from './../action/actionType';

const initialState = {
    news:[],
}

export const newsReducer = (state = initialState,{type, payload}) => {
      switch (type) {
        case ActionTypes.GET_NEWS:
            return {...state, news:payload};
        case ActionTypes.FETCH_NEWS:
            return {...state, news:payload};
        default:
            return state;
      }
}

