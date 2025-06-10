
import './App.css';
import { Component } from 'react';
import Navbar from './Navbar.js';
// import NewsItem from './NewsItem.js';
import News from './News.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";


export default class  App extends Component{
 
  render() {
    return(
      <>
      <Router>
<Navbar/>
{/* <News category="health"/> */}

<Routes>
  <Route  exact path="/" element={<News  category="genral"/>}>
  </Route>
   <Route  exact path="/business" element={<News  category="business"/>}>
  </Route>
  <Route  exact path="/entertainment" element={<News  category="entertainment"/>}>
  </Route>
  <Route  exact path="/health" element={<News  category="health"/>}>
  </Route>
  <Route  exact path="/science" element={<News  category="science"/>}>
  </Route>
  <Route  exact path="/sports" element={<News  category="sports"/>}>
  </Route> 
   <Route  exact path="/technology" element={<News  category="technology"/>}>
  </Route>       
        </Routes>

</Router>
      </>
    )
  }
}
