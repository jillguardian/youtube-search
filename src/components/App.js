import React, {useState} from 'react';
import Search from "./Search";
import VideoSuggestions from "./VideoSuggestions";
import Video from "./Video";
import PlaceholderVideoSuggestions from "./PlaceholderVideoSuggestions";
import useVideos from "../hooks/useVideos";

const MAX_RESULTS = 20;
const App = () => {

    const [isLoading, setLoading] = useState(false);
    const [videos, setVideos] = useVideos(MAX_RESULTS, () => setLoading(true), () => setLoading(false));
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <div className="ui container">
            <div className="ui equal width center aligned padded grid">
                <div className="row">
                    <div className="column">
                        <Search isLoading={isLoading} onSearch={setVideos}/>
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

