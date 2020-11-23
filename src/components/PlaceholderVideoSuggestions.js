import React from 'react';
import './VideoSuggestions.css';

const PlaceholderVideoSuggestions = ({count = 5}) => {
    return (
        <div className="ui divided items">
            {[...Array(count)].map((x, i) =>
                <PlaceholderVideoSuggestion key={i} />
            )}
        </div>
    );
}

export default PlaceholderVideoSuggestions;

const PlaceholderVideoSuggestion = () => {
    return (
        <div className="left aligned video item">
            <div className="ui small placeholder image">
                <div className="image"/>
            </div>
            <div className="content">
                <div className="ui placeholder">
                    <div className="header">
                        <div className="line"/>
                    </div>
                    <div className="description">
                        <div className="line"/>
                        <div className="line"/>
                        <div className="line"/>
                    </div>
                </div>
            </div>
        </div>
    );
}