import './SecondSubtitleComponent.scss';
import { useNavigate } from 'react-router-dom';

function SecondSubtitleComponent() {
  const history = useNavigate();
  return (
    <div className="secondSubtitle">
        <div className="header">
            LUCY
        </div>
        <div className="subtitles__box">
            My name is Lucy <br /> 
            And I will show you how to save your life legacy forever, for your future ancestors
        </div>
    </div>
  );
}

export default SecondSubtitleComponent;