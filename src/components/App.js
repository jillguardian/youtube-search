import React, {useState} from 'react';
import Search from "./Search";
import youtube from "../api/youtube";
import VideoSuggestions from "./VideoSuggestions";
import Video from "./Video";
import PlaceholderVideoSuggestions from "./PlaceholderVideoSuggestions";

const MAX_RESULTS = 20;
const App = () => {

    const [isLoading, setLoading] = useState(false);
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const onSearch = async term => {
        setLoading(true);
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: MAX_RESULTS,
                type: 'video',
                q: term
            }
        })
        const data = response.data;
        const videos = data.items.map(video => propertiesFrom(video));
        setVideos(videos);
        setLoading(false);
    }

    return (
        <div className="ui container">
            <div className="ui equal width center aligned padded grid">
                <div className="row">
                    <div className="column">
                        <Search isLoading={isLoading} onSearch={onSearch}/>
                    </div>
                </div>
                <div className="row">
                    {selectedVideo && (
                        <div className="column">
                            <Video {...selectedVideo} />
                        </div>
                    )}
                    <div className="column">
                        {isLoading ?
                            <PlaceholderVideoSuggestions count={MAX_RESULTS}/> :
                            <VideoSuggestions videos={videos} onSelect={setSelectedVideo}/>
                        }
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