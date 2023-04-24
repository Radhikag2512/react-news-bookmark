import React from 'react'
import { useSelector} from 'react-redux';
import  ArticleList  from "./ArticleList";
import { Link } from 'react-router-dom';

const Bookmarks = () => {
  const bookmarkItems = useSelector((state) => state.allbookmarks.bookmarkItems)
// console.log(bookmarkItems);

  return (
    <>
    <div className='bookmark-header'>
      <h3 className='heading'>Bookmarks</h3>
      <Link  to={'/'}>
      <div className='header'>
             <button className='header-button'>Home</button>
             </div>
   </Link>
    </div>
    <div className='bookmark-info'>
      <div className='bookmark-length'>
      {bookmarkItems.length === 0 ? (
        <p className='bookmark-text'>You have {bookmarkItems.length} Bookmarks(s)</p>
      ) : (
      <p className='bookmark-text'> {bookmarkItems.length}Bookmarks(s)</p>
      )}
      </div>
      <div className='bookmark-body'>
      {bookmarkItems.map((news, id) => (
         < ArticleList key={id} news={news}/>
      ))}
      </div>
    </div>
    </>
  )
}

export default Bookmarks;