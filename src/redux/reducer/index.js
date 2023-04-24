import { combineReducers } from "redux";
import {newsReducer} from "./newsReducer";
import {bookmarkReducer} from "./bookmarks";


const reducers = combineReducers({
    allnews:newsReducer,
    allbookmarks:bookmarkReducer,
})

export default reducers;
