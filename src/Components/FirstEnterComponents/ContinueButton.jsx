import './ContinueButton.scss';
import { useNavigate } from 'react-router-dom';

function ContinueButton() {
  // const history = useNavigate();
  // const goNext = () => {
  //   history("/FirstEnterMenu");
  // }
  return (
    <div className="continueButton">
        <button className='contButton'>CONTINUE AFTERGO</button>
    </div>
  );
}

export default ContinueButton;