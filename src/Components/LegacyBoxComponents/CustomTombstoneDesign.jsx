import './CustomTombstoneDesign.scss';
import store from '../../store';
import { useNavigate } from 'react-router-dom';

function CustomTombstoneDesign() {
    const history = useNavigate();
    const toNext = () => {
        history("/LegacyBoxSettingFULL");
    }
  return (
    <div className="customTombstoneDesign__modal__box">
        <div className="message__Box">
            <div className="main__text">
                Custom design<br />
                tombstone
            </div>
            <div className="small__text">
                After making a purchase, we will contact<br />
                you to create your tombstone
            </div>
            <div className="cont__button">
                <button onClick={toNext}>OK</button>
            </div>
        </div>
    </div>
  );
}

export default CustomTombstoneDesign;