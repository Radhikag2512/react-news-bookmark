import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { fetchNews} from "../redux/action/newsAction";
import ArticleList from "./ArticleList";
import { Link } from 'react-router-dom';

const Home = () => {
  const news = useSelector((state) => state);
  // console.log(news);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchNews());
  },[])

  console.log("News:",  news);

return (
  <div className='container'>
   <Link  to={'/bookmarks'}>
    <div className='header'>
             <button className='header-button'>Bookmarks</button>
             </div>
   </Link>
    <ArticleList/>
  </div>
)
}



export default Home;
