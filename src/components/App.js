import React from 'react';
import Search from "./Search";
import youtube from "../api/youtube";
import VideoSuggestions from "./VideoSuggestions";

export default class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
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
            videos: data.items.map(video => propertiesFrom(video))
        });
    }

    onSelect = video => {
        this.setState({selectedVideo: video});
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
                    <div className="row">
                        <div className="column">
                        </div>
                        <div className="column">
                            <VideoSuggestions videos={this.state.videos} onSelect={this.onSelect}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

function propertiesFrom(video) {
    const {
        id: {
            videoId: id
        },
        snippet: {
            channelTitle: channel,
            title,
            description,
            thumbnails: {
                default: {
                    url: thumbnail
                }
            }
        }
    } = video;
    return {id, channel, title, description, thumbnail};
}