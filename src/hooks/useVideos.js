import {useState} from "react";
import youtube from "../api/youtube";

const useVideos = (count = 10, beforeSearch = () => {}, afterSearch = () => {}) => {

    const [videos, setVideos] = useState([]);
    const onSearch = async term => {
        beforeSearch();
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: count,
                type: 'video',
                q: term
            }
        })
        const data = response.data;
        const videos = data.items.map(video => propertiesFrom(video));
        setVideos(videos);
        afterSearch();
    }

    return [videos, onSearch];
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
    return {
        id,
        url: `https://www.youtube.com/embed/${id}`,
        channel,
        title,
        description,
        thumbnail
    };
}

export default useVideos;