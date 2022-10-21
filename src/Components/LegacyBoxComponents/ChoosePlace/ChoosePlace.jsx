import './ChoosePlace.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { InfoBlock } from './components/info-block';
import { ChooseMapAndArea } from './components/choose-map-and-area';
import { BlueCustomBtn } from '../OrderNewLand/components/blue-custom-btn';
import { SelectAreaInfo } from './components/selecet-area-info';
import { SelectRoomImg } from './components/select-room-img';
import { NUMBER_OF_MAP_FOR_SLIDER } from './components/constants';
import { GoBackButton } from '../OrderNewLand/components/go-back-button';

function ChoosePlace() {
    const history = useNavigate();
    const dispatch = useDispatch();
    const typeOfAccount = useSelector(store => store.selectedTypeOfAccount);
    const selectedRoom = useSelector(store => store.selectedRoom);

    const onContinue = () => {
      dispatch({ type: "LASTROUTEMENU", payload: '/ChoosePlace' });
      history('/ChooseLand')
    }
    const onChangeMapArea = (number) => {
      dispatch({ type: 'SET_SELECTED_MAP_AREA_NUMBER', payload: number });
    }

    useEffect(() => {
      if (!typeOfAccount?.type) {
        history('/OrderNewLand');
      }
    }, [])

    return (
      <>
      <GoBackButton />
      <div className="choose__place__modal__box">
        <InfoBlock text={typeOfAccount?.type} />
        <SelectRoomImg />
        <ChooseMapAndArea onChange={onChangeMapArea} number={NUMBER_OF_MAP_FOR_SLIDER} />
        <SelectAreaInfo freePlaces={5}/>
        <BlueCustomBtn text="continue" disabled={false} onClick={onContinue} />
      </div>
      </>
    );
}

export default ChoosePlace;