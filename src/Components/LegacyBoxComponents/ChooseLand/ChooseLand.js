import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { InfoBlock } from '../ChoosePlace/components/info-block';
import { SelectRoomImg } from '../ChoosePlace/components/select-room-img';
import './ChooseLand.scss';
import { BlueCustomBtn } from '../OrderNewLand/components/blue-custom-btn';
import { SelectedLegacyMap } from './components/selected-legacy-map';
import { SelectAreaInfo } from '../ChoosePlace/components/selecet-area-info';
import { UserInfoTombStone } from './components/user-info-tombstone';

export default function ChooseLand() {
    const history = useNavigate();
    const typeOfAccount = useSelector(store => store.selectedTypeOfAccount);
    const numberOfMap = useSelector(state => state.selectedMapAreaNumber);
    const onContinue = () => {
        history('/ChooseTombStone')
    }
    useEffect(() => {
        if (!typeOfAccount?.type) history('/OrderNewLand');
    }, [])
    return (
        <div className="choose__land__modal__boxs">
            <InfoBlock text={typeOfAccount?.type} />
            <SelectRoomImg />
            <SelectedLegacyMap numberOfMap={numberOfMap}/>
            <SelectAreaInfo freePlaces={5} />
            <UserInfoTombStone userName="Alexandr Pupkin" status="busy" img="" />
            <BlueCustomBtn text="Continue" disabled={false} onClick={onContinue} />
        </div>
    )
}