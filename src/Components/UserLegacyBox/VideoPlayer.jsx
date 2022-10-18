import './VideoPlayer.scss';
import store from '../../store';

function VideoPlayer({video}) {
    const hideSlider = () => {
        store.dispatch({type: "VIDEOSHOWN", payload: false});
    }
  return (
    <div onClick={hideSlider} className="video__player">
      <div onClick={(e) => e.stopPropagation()} className="video__player__box">
        <iframe src = {video.image}/>
      </div>
    </div>
  );
}

export default VideoPlayer;
