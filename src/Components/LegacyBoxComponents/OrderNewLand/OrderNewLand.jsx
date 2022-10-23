import './OrderNewLand.scss';
import { useState } from 'react';
import { StringSlider } from './components/string-slider';
import { GoBackButton } from './components/go-back-button';
import { Info } from './components/info';
import { MoreInfo } from './components/moreInfo';
import { BlueCustomBtn } from './components/blue-custom-btn';
import { ChangeScene } from './components/change-scene';
import { ModalCustomDesign } from './components/modal-custom-design';
import { getAllSubscriptionsPlans, getAllTLegacyRooms } from '../../../Api/request';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Room from '../../SceneComponents/Room';

function OrderNewLand() {

  const [currTypeLagacyRoomId, setCurrTypeLagacyRoomId] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const [isCustomDesignModal, setIsCustomDesignModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState({});
  const [legacyRoomsInfo, setLegacyRoomsInfo] = useState([]);
  const allPrivelegiusForActiveTariff = useSelector(state => state.allPrivelegiusForActiveTariff);
  const dispatch = useDispatch();
  const history = useNavigate();

  const onTypeChange = (element, currId) => {
    setCurrTypeLagacyRoomId(currId);
    dispatch({ type: "SET_SELECTED_TYPE_OF_ACCOUNT", payload: element });
  }
  const onContinue = () => {
    if (selectedRoom.name === 'custom') {
      setIsCustomDesignModal(true);
    } else {
      dispatch({ type: "LASTROUTEMENU", payload: '/OrderNewLand' });
      history('/ChoosePlace');
    }
  }
  const onSelect = () => {
    setIsSelected(true);
  }
  const onCloseModal = () => {
    setIsCustomDesignModal(false);
    dispatch({ type: "LASTROUTEMENU", payload: '/OrderNewLand' });
    history('/ChoosePlace');
  }
  const onChooseScene = (selectedRoom) => {
    setSelectedRoom(selectedRoom);
    dispatch({ type: "SET_SELECTED_ROOM", payload: selectedRoom });
  }

  useEffect(() => {
    getAllTLegacyRooms().then(res => {
      setLegacyRoomsInfo(res.data);
      setSelectedRoom(res.data[0])
    })
    getAllSubscriptionsPlans().then(res => {
      dispatch({ type: 'SET_ALL_PREVELEGIOS_FOR_ACTIVE_TARIFF', payload: res.data });
    });
  }, [])
  return (
    <div className='newLand'>
      <GoBackButton />
        <div className='newLand__content'>
            <div className='newLand__content__info'>
                <StringSlider array={allPrivelegiusForActiveTariff} onChange={onTypeChange} />
                <Info info={allPrivelegiusForActiveTariff[currTypeLagacyRoomId]} />
                <MoreInfo moreInfo={allPrivelegiusForActiveTariff[currTypeLagacyRoomId]} /> 
                <BlueCustomBtn text="CONTINUE" onClick={onContinue} disabled={!isSelected} />
            </div>
            <div className='newLand__content__three-room'>
                <div className='newLand__content__three-room-cont'>
                    <Room path={selectedRoom?.path} />
                </div>
                <div className='newLand__content__three-room-scene'>
                    <ChangeScene scenes={legacyRoomsInfo} onChooseScene={onChooseScene} />
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