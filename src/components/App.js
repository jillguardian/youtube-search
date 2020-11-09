import React from 'react';
import Search from "./Search";

export default class App extends React.Component {

    onSearch(term) {
        // TODO: Call API
    }

    render() {
        return (
            <div className="ui container">
                <div className="ui equal width center aligned padded grid">
                    <div className="row">
                        <div className="column">
                            <Search onSearch={this.onSearch} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}