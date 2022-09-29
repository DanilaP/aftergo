import './FirstEnterMenu.scss';
import { useNavigate } from 'react-router-dom';
import store from '../../store';

function FirstEnterMenu() {
  const history = useNavigate();
  const goToAnotherRoute = (ourRoute) => {
    store.dispatch({type: "LASTROUTE", payload: "/FirstEnterMenu"});
    switch(ourRoute) {
      case "legacy__map": return;
      case "log__in": history("/LogInFirst");
      case "about__us": return;
      case "return__to__the__world": history("/");
    }
  } 
  const goToGift = () => {
    store.dispatch({type: "LASTROUTE", payload: "/FirstEnterMenu"});
    history("/OrderNewLand");
  }
  const goToSupport = () => {
    store.dispatch({type: "LASTROUTE", payload: "/FirstEnterMenu"});
    history("/Support");
  }
  return (
    <div className="firstEnterMenu">
       <div className="head__content">
            <div className="header">
                CHOOSE WHAT TO DO
            </div>
            <div className="subtitles__box">
                If you are new here click metaverse Legacy map
            </div>
       </div>
       <div className="menu">
            <div onClick={() => goToAnotherRoute("legacy__map")} id = "legacy__map__button">metaverse Legacy map</div>
            <div onClick={goToGift} className="menu__item">gift to friend</div>
            <div onClick={() => goToAnotherRoute("log__in")} className="menu__item">Log in</div>
            <div onClick={() => goToAnotherRoute("about__us")} className="menu__item">about us</div>
            <div onClick={goToSupport} className="menu__item">support</div>
            <div onClick={() => goToAnotherRoute("return__to__the__world")} className="menu__item">return to the world</div>
       </div>
    </div>
  );
}

export default FirstEnterMenu;