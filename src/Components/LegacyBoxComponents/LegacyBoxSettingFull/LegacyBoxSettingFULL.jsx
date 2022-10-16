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
          />
        </div>
        <div className='legacy__box__form-payment'>
          <VariableTariffs />
        </div>
    </div>
  );
}

export default LegacyBoxSettingFULL;