import React from "react";
import './Video.css';

const PlaceholderVideo = () => {
    return (
        <div>
            <div className="ui segment">
                <div className="ui fluid video placeholder">
                    <div className="rectangular image"/>
                </div>
            </div>
            <div className="ui left aligned segment">
                <div className="ui fluid placeholder">
                    <div className="header">
                        <div className="line"/>
                        <div className="line"/>
                    </div>
                    <div className="paragraph">
                        <div className="line"/>
                        <div className="line"/>
                        <div className="line"/>
                        <div className="line"/>
                        <div className="line"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Video = ({url, title, description}) => {
    if (!url) {
        return <PlaceholderVideo/>
    }

    return (
        <div>
            <div className="ui embed">
                <iframe src={url}/>
            </div>
            <div className="ui left aligned segment">
                <div className="ui large header">{title}</div>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Video;