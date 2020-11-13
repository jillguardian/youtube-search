import React from 'react';
import Search from "./Search";
import youtube from "../api/youtube";

export default class App extends React.Component {

    state = {
        videos: []
    }

    onSearch = async term => {
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 20,
                type: 'video',
                q: term
            }
        })
        const data = response.data;
        this.setState({
            videos: data.items
        });
    }

    render() {
        return (
            <div className="ui container">
                <div className="ui equal width center aligned padded grid">
                    <div className="row">
                        <div className="column">
                            <Search onSearch={this.onSearch}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}