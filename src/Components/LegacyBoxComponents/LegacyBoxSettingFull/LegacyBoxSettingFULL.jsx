import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GoBackButton } from '../OrderNewLand/components/go-back-button';
import Info from './components/info';
import VariableTariffs from './components/variable-tariffs';
import './LegacyBoxSettingFULL.scss';

function LegacyBoxSettingFULL() {

  const history = useNavigate();
  const selectedRoom = useSelector(store => store.selectedRoom);
  const selectedTypeOfAccount = useSelector(store => store.selectedTypeOfAccount);
  const selectedMapAreaNumber = useSelector(store => store.selectedMapAreaNumber);
  const selectedTombStone = useSelector(store => store.selectedTombStone);
  const dispatch = useDispatch();
  const [forFriend, setForFriend] = useState(false);

  const onSettingsChange = (checkbox) => {
    if (checkbox.target.name === 'friend') {
      setForFriend(!forFriend);
    }
  }
  const goContinue = () => {
    if (!forFriend) {
      history('/MyPersonalData');
    } else {
      history('/FriendPersonalData');
    }
  }

  useEffect(() => {
    dispatch({ type: "LASTROUTEMENU", payload: '/ChooseTombStone' });
  }, [])
  return (
    <div className='legacy__box__form'>
        <div className='legacy__box__form-info'>
          <GoBackButton />
          <Info 
            mainPhoto={selectedRoom?.image}
            tombStonePhoto={selectedTombStone}
            mapPhoto={selectedRoom?.image}
            selectedRoom={selectedTypeOfAccount}
            numberOfMap={selectedMapAreaNumber}
            typeOfAccount={selectedTypeOfAccount}
            onSettingsChange={onSettingsChange}
          />
        </div>
        <div className='legacy__box__form-payment'>
          <VariableTariffs selectedTypeOfAccount={selectedTypeOfAccount} />
        </div>
        <div className='legacy__box__form-action'>
          <button onClick={goContinue}>Continue</button>
        </div>
    </div>
  );
}

export default LegacyBoxSettingFULL;