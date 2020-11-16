import React from 'react';
import './Suggestions.css';

const Suggestion = ({summary, classes, onSelect}) => {

    const {author, title, description, thumbnail} = summary;
    return (
        <div onClick={() => onSelect(summary)} className={`left aligned ${classes} item`}>
            <div className="ui small image">
                <img src={thumbnail} alt={title}/>
            </div>
            <div className="content">
                <div className="header">{title}</div>
                <div className="meta">
                    <span>{author}</span>
                </div>
                <div className="description">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );

}

export default Suggestion;