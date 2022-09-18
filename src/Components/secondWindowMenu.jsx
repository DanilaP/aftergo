import './secondWindowMenu.scss';
import { useNavigate } from 'react-router-dom';

function SecondWindowMenu() {
    const history = useNavigate();
    const continueToNext = () => {
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