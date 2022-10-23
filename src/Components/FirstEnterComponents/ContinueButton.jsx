import './ContinueButton.scss';
import { useNavigate } from 'react-router-dom';

function ContinueButton() {
  const history = useNavigate();
  const goNext = () => {
    history("/Map");
  }
  return (
    <div className="continueButton">
        <button onClick={goNext} className='contButton'>CONTINUE AFTERGO</button>
    </div>
  );
}

export default ContinueButton;