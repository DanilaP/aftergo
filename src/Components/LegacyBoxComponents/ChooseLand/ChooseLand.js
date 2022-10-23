import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MiniMap from '../../SceneComponents/MiniMap';
import { InfoBlock } from '../ChoosePlace/components/info-block';
import { SelectRoomImg } from '../ChoosePlace/components/select-room-img';
import './ChooseLand.scss';
import { BlueCustomBtn } from '../OrderNewLand/components/blue-custom-btn';
import { SelectedLegacyMap } from './components/selected-legacy-map';
import { SelectAreaInfo } from '../ChoosePlace/components/selecet-area-info';
import { UserInfoTombStone } from './components/user-info-tombstone';
import { GoBackButton } from '../OrderNewLand/components/go-back-button';

export default function ChooseLand() {
    const history = useNavigate();
    const dispatch = useDispatch();
    const typeOfAccount = useSelector(store => store.selectedTypeOfAccount);
    const numberOfMap = useSelector(state => state.selectedMapAreaNumber);

    const onContinue = () => {
        dispatch({ type: "LASTROUTEMENU", payload: '/ChooseLand' });
        history('/ChooseTombStone')
    }
    useEffect(() => {
        dispatch({ type: "LASTROUTEMENU", payload: '/ChoosePlace' });
        if (!typeOfAccount?.type) history('/OrderNewLand');
    }, [])
    return (
        <>
        <MiniMap />
        <GoBackButton />
        <div className="choose__land__modal__boxs">
            <InfoBlock text={typeOfAccount?.type} />
            <SelectRoomImg />
            <SelectedLegacyMap numberOfMap={numberOfMap}/>
            <SelectAreaInfo freePlaces={5} />
            <UserInfoTombStone userName="Alexandr Pupkin" status="busy" img="" />
            <BlueCustomBtn text="Continue" disabled={false} onClick={onContinue} />
        </div>
        </>
    )
}