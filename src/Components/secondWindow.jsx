import './secondWindow.scss';
import { useNavigate } from 'react-router-dom';
import store from '../store';
function SecondWindow() {
    const history = useNavigate();
    const continueToNext = () => {
        store.dispatch({type: "LASTROUTE", payload: "/SecondWindow"});
        history("/LogInFirst");
    }
  return (
      <div>
        <div onClick={(e) => e.stopPropagation()} className="second__modal__box">
            <div className='header'>
                <button onClick={continueToNext}>LOG IN</button>
            </div>
        </div>
    </div>
  );
}

export default SecondWindow;