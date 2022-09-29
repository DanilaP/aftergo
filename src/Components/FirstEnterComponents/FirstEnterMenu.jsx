import './FirstEnterMenu.scss';
import { useNavigate } from 'react-router-dom';

function FirstEnterMenu() {
  const history = useNavigate();
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
            <div id = "legacy__map__button">metaverse Legacy map</div>
            <div className="menu__item">gift to friend</div>
            <div className="menu__item">Log in</div>
            <div className="menu__item">about us</div>
            <div className="menu__item">support</div>
            <div className="menu__item">return to the world</div>
       </div>
    </div>
  );
}

export default FirstEnterMenu;