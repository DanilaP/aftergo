import './ChooseLandMenu.scss';
import { useSelector } from 'react-redux';
import store from '../../store';
import { useNavigate } from 'react-router-dom';

function ChooseLandMenu() {
    const userData = useSelector(store => store.userData);
    const history = useNavigate();
    const lastRoute = useSelector(store => store.lastRoute);

    const toPrev = () => {
        history(lastRoute);
    }
    const GoToOrderingNewLand = () => {
        store.dispatch({type: "LASTROUTE", payload: "/ChooseLandMenu"});
        history("/OrderNewLand");
    }
    const goToSupport = () => {
        store.dispatch({type: "LASTROUTE", payload: "/ChooseLandMenu"});
        history("/Support");
    }
    const returnToTheWorld = () => {
        store.dispatch({type: "LASTROUTE", payload: "/ChooseLandMenu"});
        history("/");
    }
    const goToProfile = () => {
        store.dispatch({type: "LASTROUTE", payload: "/ChooseLandMenu"});
        history("/Profile");
    }
  return (
    <div className="choose__land__modal__box">
        <div className="header">
            <div className="arrow_box">
                <div onClick={toPrev} className="arrow_example_1"></div>
            </div>
        </div>
        <div className="main__menu">
            <button>MY LEGACY BOX</button>
            <button onClick={GoToOrderingNewLand}>ORDER MY LAND</button>
            <button onClick={GoToOrderingNewLand}>GIFT TO FRIEND</button>
            <button onClick={goToProfile}>PROFILE</button>
            <button>ABOUT US</button>
            <button onClick={goToSupport}>SUPPORT</button>
            <button onClick={returnToTheWorld}>RETURN TO THE WORLD</button>
        </div>
    </div>
  );
}

export default ChooseLandMenu;