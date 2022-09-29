import './ContinueButton.scss';
import { useNavigate } from 'react-router-dom';

function ContinueButton() {
  const history = useNavigate();
  return (
    <div className="continueButton">
        <button className='contButton'>CONTINUE AFTERGO</button>
    </div>
  );
}

export default ContinueButton;