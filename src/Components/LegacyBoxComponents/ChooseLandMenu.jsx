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
    const GoToLegacyBox = () => {
        store.dispatch({type: "LASTROUTE", payload: "/ChooseLandMenu"});
        history("/LegacyBox");
    }
  return (
    <div className="choose__land__modal__box">
        <div className="header">
            <div className="arrow_box">
                <div onClick={toPrev} className="arrow_example_1"></div>
            </div>
        </div>
        <div className="main__menu">
            <button id = "block_a" onClick={GoToLegacyBox}>MY LEGACY BOX</button>
            <button id = "block_b" onClick={GoToOrderingNewLand}>ORDER MY LAND</button>
            <button id = "block_c" onClick={GoToOrderingNewLand}>GIFT TO FRIEND</button>
            <button id = "block_d" onClick={goToProfile}>PROFILE</button>
            <button id = "block_e">ABOUT US</button>
            <button id = "block_f" onClick={goToSupport}>SUPPORT</button>
            <button id = "block_g" onClick={returnToTheWorld}>RETURN TO THE WORLD</button>
        </div>
    </div>
  );
}

export default ChooseLandMenu;