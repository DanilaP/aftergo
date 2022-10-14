import './OrderNewLand.scss';
import { useState } from 'react';
import { StringSlider } from './components/string-slider';
import { STRING_SLIDER_TYPES, PRIVELEGES_ALL_LEVELS, PRIVELEGES_PRICES, SCENES } from './components/constants';
import { Info } from './components/info';
import { MoreInfo } from './components/moreInfo';
import { BlueCustomBtn } from './components/blue-custom-btn';
import { ChangeScene } from './components/change-scene';
import { ModalCustomDesign } from './components/modal-custom-design';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function OrderNewLand() {

  const [currTypeLagacyRoomId, setCurrTypeLagacyRoomId] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const [isCustomDesignModal, setIsCustomDesignModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState();
  const dispatch = useDispatch();
  const history = useNavigate();

  const onTypeChange = (element) => {
    setCurrTypeLagacyRoomId(element.id - 1);
    dispatch({ type: "SET_SELECTED_TYPE_OF_ACCOUNT", payload: element });
  }
  const onContinue = () => {
    if (selectedRoom.name === 'custom') {
      setIsCustomDesignModal(true);
    } else {
      history('/ChoosePlace');
    }
  }
  const onSelect = () => {
    setIsSelected(true);
  }
  const onCloseModal = () => {
    setIsCustomDesignModal(false);
    history('/ChoosePlace');
  }
  const onChooseScene = (selectedRoom) => {
    setSelectedRoom(selectedRoom);
    dispatch({ type: "SET_SELECTED_ROOM", payload: selectedRoom });
  }
  return (
    <div className='newLand'>
        <div className='newLand__content'>
            <div className='newLand__content__info'>
                <StringSlider array={STRING_SLIDER_TYPES} onChange={onTypeChange} />
                <Info info={PRIVELEGES_ALL_LEVELS[currTypeLagacyRoomId]} />
                <MoreInfo moreInfo={PRIVELEGES_PRICES[currTypeLagacyRoomId]} />
                <BlueCustomBtn text="CONTINUE" onClick={onContinue} disabled={!isSelected} />
            </div>
            <div className='newLand__content__three-room' style={{backgroundImage: `url(${selectedRoom?.img})`}}>
                <div className='newLand__content__three-room-scene'>
                    <ChangeScene scenes={SCENES} onChooseScene={onChooseScene} />
                </div>
                <div className='newLand__content__three-room-selectBtn'>
                    <BlueCustomBtn text="SELECT" onClick={onSelect} />
                </div>
            </div>
        </div>
        {isCustomDesignModal && 
          <ModalCustomDesign 
            title="Custom design legacy room" 
            subtitle="After making a purchase, we will contact you to create your Legacy Room" 
            btnText="OK"
            onClick={onCloseModal} 
          />
        }
    </div>
  );
}

export default OrderNewLand;