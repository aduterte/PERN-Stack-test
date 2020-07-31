import React from "react"

export default function BlogCard(props){
    // console.log(props)

    // let date = props.blog.pubDate
    // let blip = props.blog.content.replace("<p>", "").replace("</p>", "")
    //  let blip = DOMParser.parseFromString(props.blog.content, 'text/html')
    return (
        <div className="blog-card">
            <div className="blog-card-img-div">
                <img src={props.blog.thumbnail} />

            </div>
            <div className="blog-card-body">
                <h4>{props.blog.title}</h4>
                <h4>{props.blog.pubDate.substring(0,10)}</h4>
            </div>
            
        </div>
    )
}