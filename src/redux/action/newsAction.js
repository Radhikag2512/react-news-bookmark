import {ActionTypes} from "./actionType";
import newsApi from "../../apis/newsApi";


export const fetchNews = () =>  async (dispatch) => { 
    const response = await newsApi
  .get("everything?q=bitcoin&apiKey=5b5df4dcfa64407f9a391fd423b157f7");
console.log(response);
  dispatch({
    type: ActionTypes.FETCH_NEWS,
    payload: response.data.articles,
    })
  }

export const getNews = (news) =>  {
    return{
        type: ActionTypes.GET_NEWS,
        payload: news,
    }
}


export const bookmarkItem = (news) => (dispatch,getState) => {
  const { bookmarkItems } = getState().allbookmarks;
  localStorage.setItem('allbookmarks', JSON.stringify([news, ...bookmarkItems]));
  dispatch({
      type: ActionTypes.BOOKMARK_ITEM,
      payload: news, 
    })
}

export const unBookmarkItem = (news) => (dispatch,getState) => {
  const { bookmarkItems } = getState().allbookmarks;
  const newBookmarkItems = bookmarkItems.filter(
    bookmarkItem => bookmarkItem !== news
  );
  localStorage.setItem('allbookmarks', JSON.stringify(newBookmarkItems));
  dispatch({
      type: ActionTypes.UNBOOKMARK_ITEM,
      payload: news, 
    })
}

export const getBookmarkItems = () => {
  let bookmarkItems = localStorage.getItem('allbookmarks');
  if (bookmarkItems === null) {
    bookmarkItems = [];
  } else {
    bookmarkItems = JSON.parse(bookmarkItems);
  }
  return{
    type: ActionTypes.GET_BOOKMARK_ITEMS,
    payload: bookmarkItems,
  }
}