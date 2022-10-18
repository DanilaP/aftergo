import './ChangeNameOfLegacyBox.scss';
import { useState } from 'react';
import store from '../../store';
import $api from '../Axios';

function ChangeNameOfLegacyBox({object, func, id}) {
    const [newLegacyBoxName, setNewLegacyBoxName] = useState("");
    const goToPrev = () => {    
        store.dispatch({type: "CHANGEFILENAME", payload: false});
    }
    const changeLegacyName = async () => {
      let newLandInfo = {
        name: newLegacyBoxName,
        description: "my legacy box",
      }
      await $api.patch("https://aftergo-api-dev.azurewebsites.net/api/lands/" + id, newLandInfo)
        .then((response) => {
            func(newLegacyBoxName);
        })
        .catch((error) => {
            console.log(error);
        })
      store.dispatch({type: "CHANGEFILENAME", payload: false});
    }
  return (
    <div onClick={goToPrev} className="ChangeNameOfLegacyBox">
      <div onClick={(e) => e.stopPropagation()} className="change__box">
        <input onChange={(e) => setNewLegacyBoxName(e.target.value)} placeholder='New legacy box name' />
        <button onClick={changeLegacyName}>Change legacy box name</button>
      </div>
    </div>
  );
}

export default ChangeNameOfLegacyBox;
