import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var VideoPlayerContainer = connect(mapStateToProps, null)(VideoPlayer)

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.
const mapStateToProps = (state) => ({
    video: state.currentVideo
})

const mapDispatchToProps = (dispatch) => {
  handleInputChange: (q) => {
      dispatch(search(q))
  }
}
export default VideoPlayerContainer;
