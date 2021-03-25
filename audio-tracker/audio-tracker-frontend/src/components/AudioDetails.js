import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import ReactPlayer from 'react-player';
// import ReacPlayer from "react-player"

export default function AudioDetail(props){

    const {title, source, description, link} = props.audio,
     url = "https://res.cloudinary.com/dytqq4v0f/video/upload/v1616692567/11_-_Everlong_dgidl3.mp3"

    function getSource(){
        // soundgasm.getSound(source)
        return "test"
    }

    return(
        <div>
            <div>Title: {title}</div>
            {/* <div> Link:{getSource()}</div> */}

            <div>Description: <span style={{whiteSpace: "pre-line"}}>{description}</span></div>

            <ReactAudioPlayer src={url} controls/>
        </div>
    )
}