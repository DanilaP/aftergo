import './SecondSubtitleComponent.scss';
import { useNavigate } from 'react-router-dom';
import store from "../../store";

function SecondSubtitleComponent() {
  const history = useNavigate();
    const changeSub = () => {
        store.dispatch({type: "SHOWSECONDSUB", payload: false});
        store.dispatch({type: "SHOWFIRSTBUTTON", payload: true});
    }
  return (
    <div className="secondSubtitle">
        <div className="header">
            LUCY
        </div>
        <div onClick={changeSub} className="subtitles__box">
            My name is Lucy <br /> 
            And I will show you how to save your life legacy forever, for your future ancestors
        </div>
    </div>
  );
}

export default SecondSubtitleComponent;