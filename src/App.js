import React from 'react'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from "./Pages/Home";
import Bookmarks from './Pages/Bookmarks';
import "./App.css"


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/bookmarks' element={<Bookmarks/>}/>
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App