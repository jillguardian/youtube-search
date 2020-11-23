import React, {useState} from 'react';
import Search from "./Search";
import youtube from "../api/youtube";
import VideoSuggestions from "./VideoSuggestions";
import Video from "./Video";

const App = () => {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const onSearch = async term => {
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 20,
                type: 'video',
                q: term
            }
        })
        const data = response.data;
        const videos = data.items.map(video => propertiesFrom(video));
        setVideos(videos);
    }

    return (
        <div className="ui container">
            <div className="ui equal width center aligned padded grid">
                <div className="row">
                    <div className="column">
                        <Search onSearch={onSearch}/>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <Video {...selectedVideo} />
                    </div>
                    <div className="column">
                        <VideoSuggestions videos={videos} onSelect={setSelectedVideo}/>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default App;

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
    return {
        id,
        url: `https://www.youtube.com/embed/${id}`,
        channel,
        title,
        description,
        thumbnail
    };
}