
import http from "./http";
const YOUTUBE_API_KEY = 'AIzaSyBPYbwqwc6te3oIy0gZIH8yAVBzJA1J6fU'

const fetchVideos = (offset, keyword) => {
    return http.get('/search', {
      params: {
        part: 'snippet',
        type: 'video',
        maxResults: 20,
        q: keyword,
        key: YOUTUBE_API_KEY,
        pageToken: offset,
        videoDefinition: 'high'
      }
    });
  };

  export default {
    fetchVideos
  };
