import React from 'react';
import Suggestion from "./Suggestion";
import './VideoSuggestions.css';

const VideoSuggestions = ({videos}) => {

    return (
        <div className="ui divided items">
            {videos.map(video => {
                const {id} = video;
                return <Suggestion key={id}
                                   summary={video}
                                   classes="video"/>
            })}
        </div>
    );

}

export default VideoSuggestions;