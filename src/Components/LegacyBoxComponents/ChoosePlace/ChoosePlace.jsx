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

function ChoosePlace() {
    const history = useNavigate();
    const dispatch = useDispatch();
    const typeOfAccount = useSelector(store => store.selectedTypeOfAccount);
    const selectedRoom = useSelector(store => store.selectedRoom);

    const onContinue = () => {
      history('/ChooseLand')
    }
    const onChangeMapArea = (number) => {
      dispatch({ type: 'SET_SELECTED_MAP_AREA_NUMBER', payload: number });
    }

    useEffect(() => {
      if (!typeOfAccount?.name) history('/OrderNewLand');
    }, [])

    return (
      <div className="choose__place__modal__box">
        <InfoBlock text={typeOfAccount?.name} />
        <SelectRoomImg />
        <ChooseMapAndArea onChange={onChangeMapArea} number={NUMBER_OF_MAP_FOR_SLIDER} />
        <SelectAreaInfo freePlaces={5}/>
        <BlueCustomBtn text="continue" disabled={false} onClick={onContinue} />
      </div>
    );
}

export default ChoosePlace;