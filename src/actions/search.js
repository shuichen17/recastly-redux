import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
 //TODO:  Write an asynchronous action to handle a video search!
function search() {
    searchYouTube({key: YOUTUBE_API_KEY,query: q}, (videos) => {
    changeVideoList(videos)
    changeVideo(videos[0])
 });
}
//  listArray.map((element) => changeVideoList(element));
return search
 
 
};
console.log(handleVideoSearch)
export default handleVideoSearch;
