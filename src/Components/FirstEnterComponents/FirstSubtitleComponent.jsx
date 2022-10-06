import './FirstSubtitleComponent.scss';
import { useNavigate } from 'react-router-dom';
import store from "../../store";

function FirstSubtitleComponent() {
  const history = useNavigate();
  const changeSub = () => {
      store.dispatch({type: "SHOWFIRSTSUB", payload: false});
      store.dispatch({type: "SHOWSECONDSUB", payload: true});
  }
  return (
    <div className="firstSubtitle">
        <div className="header">
            LUCY
        </div>
        <div onClick={changeSub} className="subtitles__box">
            Hello <br />
            And Welcome to AfterGo
        </div>
    </div>
  );
}

export default FirstSubtitleComponent;