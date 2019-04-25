import { stringify } from "querystring";

var changeVideo = (video) => ({
  // everything insdie the ()
  //TODO:  Return some action object to change the currently playing video.
    type: 'CHANGE_VIDEO',
    video: video
});

export default changeVideo;

