import { ActionTypes } from './../action/actionType';


const initialState = {
    bookmarkItems: []
  };
  
  
  export const bookmarkReducer = (state = initialState, { type, payload }) => {
          switch (type) {
            case ActionTypes.BOOKMARK_ITEM:
              return {
                ...state, 
                bookmarkItems:[payload, ...state.bookmarkItems]
              };
              case ActionTypes.UNBOOKMARK_ITEM:
              return{
                ...state,
                bookmarkItems: state.bookmarkItems.filter(
                  news => news.title !== payload.title
                )
              } ;
              case ActionTypes.GET_BOOKMARK_ITEMS:
                return {
                  ...state,
                  bookmarkItems: payload
                };
                
            default:
              return state;
          }
  }