import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {bookmarkItem,unBookmarkItem} from "../redux/action/newsAction"

const ArticleList = () => {
    const news = useSelector((state) => state.allnews.news);
//  console.log(news);
    const bookmarkItems = useSelector((state) => state.allbookmarks.bookmarkItems)
// console.log(bookmarkItems);
const dispatch = useDispatch();


const isBookmark = news => {
    if (bookmarkItems !== null) {
      return (
        bookmarkItems.findIndex(bookmark => bookmark.title === news.title) > -1
      );
    }
  };

const bookmark = news => {
  dispatch(bookmarkItem(news));
  };

  const unBookmark = news => {
    dispatch(unBookmarkItem(news));
  };


const renderList = news.map((val)=> {
    const {id, title, description, urlToImage} = val;
    return(
        <div className='row' key={id}>
            <div className='col'>
                <div className='card'>
                    <img src={urlToImage} className='card-img-top' alt='newsImage'/>
                    <div className='card-body'>
                        <h5 className='card-title'>{title}</h5>
                        <p className='card-text'>{description}</p>
                        <button className='card-button'>Go to Page</button>
                        {isBookmark(news) ? (
                            <i className="fa-solid fa-bookmark icon" 
                            onClick={() => unBookmark(news)}
                            />
                        ) : (
                            <i className="fa-regular fa-bookmark icon"
                        onClick={() => bookmark(news)}
                        />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
})

return (
 <div className='container'>
 {renderList}
 </div>
)
}

export default ArticleList;