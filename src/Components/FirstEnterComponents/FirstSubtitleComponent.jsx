import './FirstSubtitleComponent.scss';
import { useNavigate } from 'react-router-dom';

function FirstSubtitleComponent() {
  const history = useNavigate();

  return (
    <div className="firstSubtitle">
        <div className="header">
            LUCY
        </div>
        <div className="subtitles__box">
            Hello <br />
            And Welcome to AfterGo
        </div>
    </div>
  );
}

export default FirstSubtitleComponent;