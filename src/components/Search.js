import React from 'react'

export default class Search extends React.Component {

    render() {
        return (
            <form>
                <div className="ui icon input">
                    <input className="prompt" type="text" placeholder="Search video..." />
                    <i className="search icon" />
                </div>
            </form>
        );
    }

}