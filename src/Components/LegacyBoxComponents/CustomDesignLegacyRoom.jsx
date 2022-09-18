import './CustomDesignLegacyRoom.scss';
import store from '../../store';
import { useNavigate } from 'react-router-dom';

function CustomDesignLegacyRoom() {
    const history = useNavigate();
    const toNext = () => {
        //store.dispatch({type: "CUSTOMDESIGNLEGACYROOM", payload: false});
        //store.dispatch({type: "LEGACYBOXSETTINGS", payload: true});
        history("/LegacyBoxSettingFULL");
    }
  return (
    <div className="CustomDesignLegacyRoom__modal__box">
        <div className="message__Box">
            <div className="main__text">
                Custom design<br />
                legacy Room
            </div>
            <div className="small__text">
                After making a purchase, we will contact<br />
                you to create your Legacy Room
            </div>
            <div className="cont__button">
                <button onClick={toNext}>OK</button>
            </div>
        </div>
    </div>
  );
}

export default CustomDesignLegacyRoom;