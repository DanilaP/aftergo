import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Info from './components/info';
import VariableTariffs from './components/variable-tariffs';
import './LegacyBoxSettingFULL.scss';

function LegacyBoxSettingFULL() {

  const history = useNavigate();
  const selectedRoom = useSelector(store => store.selectedRoom);
  const selectedTypeOfAccount = useSelector(store => store.selectedTypeOfAccount);
  const selectedMapAreaNumber = useSelector(store => store.selectedMapAreaNumber);
  const [forFriend, setForFriend] = useState(false);

  const onSettingsChange = (checkbox) => {
    if (checkbox.target.name === 'friend') {
      setForFriend(!forFriend);
    }
  }
  const goContinue = () => {
    if (!forFriend) history('/MyPersonalData');
  }
  return (
    <div className='legacy__box__form'>
        <div className='legacy__box__form-info'>
          <Info 
            mainPhoto={selectedRoom.img}
            tombStonePhoto={selectedRoom.img}
            mapPhoto={selectedRoom.img}
            selectedRoom={selectedTypeOfAccount}
            numberOfMap={selectedMapAreaNumber}
            typeOfAccount={selectedTypeOfAccount}
            onSettingsChange={onSettingsChange}
          />
        </div>
        <div className='legacy__box__form-payment'>
          <VariableTariffs />
        </div>
        <div className='legacy__box__form-action'>
          <button onClick={goContinue}>Continue</button>
        </div>
    </div>
  );
}

export default LegacyBoxSettingFULL;