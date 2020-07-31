import React, {useEffect} from 'react';
import './App.css';
import Nav from "./Nav";
import Blog from "./Blog"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { blogsState } from "./Atoms"
import { useRecoilState} from "recoil"
import MainPage from './containers/MainPage';

function App () {
  
  const [blogs, setBlogs] = useRecoilState(blogsState)
  

  useEffect(()=>{
    // fetch("https://api.medium.com/v1/me", {
    //   headers: {
    //   "Host": "api.medium.com",
    //   "Authorization": "Bearer 247c3f324495b9cc740300a5e574d7972b37732e712b9e4b1d022e63ecafc659a",
    //   "Content-Type": "application/json",
    //   "Accept": "appliction/json",
    //   "Accept-Charset": "utf-8"}
    // }).then(resp => resp.json())
    // .then(data => setBlogs(data))
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alexduterte")
    .then(resp => resp.json())
    .then(data => setBlogs(data.items))
    // const API = require('call-of-duty-api')();
    // API.login("alexduterte@gmail.com", "BAaj326993")
  }, [setBlogs])

  
    console.log(blogs)
  return (
    <Router>
    <div className="App">
      <Nav />
      <div>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/blog">
            <Blog blogs={blogs}/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
  
}

export default App
