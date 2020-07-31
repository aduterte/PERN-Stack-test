import React, {useState, useEffect} from "react"
import BlogCard from "./BlogCard"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

export default function BlogContainer(props){

    const [blog, setBlog] = useState(props.blogs[0])
    const test = props.blogs

    // useEffect(()=>{
    //     setBlog(props.blogs[0])
    // },[])
    const content = (blog) =>{
        const div = document.createElement(div)
        div.innerHtml = blog.content
        return div
    }

    console.log(test)
    return (
        <Router>
        <div>
            <div>
                {/* <h1 style={{textAlign: "left"}}>// Blogs</h1> */}
            </div>
            <div className="blog-card-container">
                {/* {props.blogs.map(blog => <BlogCard key={blog.guid} blog={blog}/>)} */}
                {props.blogs.map(blog => <div key={blog.guid} dangerouslySetInnerHTML={{ __html: blog.content }}/>)}
            </div>
            <br/>
            <div>
            
            </div>
        </div>
        </Router>
    )
}