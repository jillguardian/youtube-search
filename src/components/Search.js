import React from 'react'

export default class Search extends React.Component {

    state = {
        term: ''
    }

    onSearch = (event) => {
        event.preventDefault();
        // TODO: Pass value to callback
    }

    render() {
        return (
            <form onSubmit={this.onSearch}>
                <div className="ui icon input">
                    <input
                        className="prompt"
                        type="text"
                        placeholder="Search video..."
                        onChange={event => this.setState({term: event.target.value})}
                        value={this.state.term} />
                    <i className="search icon" />
                </div>
            </form>
        );
    }

}