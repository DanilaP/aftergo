import './secondWindowMenu.scss';
import { useNavigate } from 'react-router-dom';
import store from '../store';

function SecondWindowMenu() {
    const history = useNavigate();
    const continueToNext = () => {
        store.dispatch({type: "LASTROUTE", payload: "/SecondWindowMenu"});
        history("/ChooseLandMenu");
    }
  return (
      <div>
        <div onClick={(e) => e.stopPropagation()} className="second__menu__modal__box">
            <div className='header'>
                <button onClick={continueToNext}>MENU</button>
            </div>
        </div>
    </div>
  );
}

export default SecondWindowMenu;