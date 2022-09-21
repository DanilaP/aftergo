import './secondWindow.scss';
import { useNavigate } from 'react-router-dom';

function SecondWindow() {
    const history = useNavigate();
    const continueToNext = () => {
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