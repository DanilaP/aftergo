import './ChangeNameOfFolders.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import store from '../../store';
import $api from '../Axios';

function ChangeNameOfFolders({object, func}) {
    const [newFolderName, setNewFolderName] = useState("");
    const goToPrev = () => {    
        store.dispatch({type: "CHANGEFOLDERNAME", payload: false});
    }
    const changeFolderName = () => {
        let newFolder = {
            id: object.folderId,
            name: newFolderName,
        }
        $api.patch("https://aftergo-api-dev.azurewebsites.net/api/folders/" + object.folderId, newFolder)
        .then((response) => {
            store.dispatch({type: "CHANGEFOLDERNAME", payload: false});
            func(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }
  return (
    <div onClick={goToPrev} className="ChangeNameOfFolder">
      <div onClick={(e) => e.stopPropagation()} className="change__box">
        <input onChange={(e) => setNewFolderName(e.target.value)} placeholder='New folder name' />
        <button onClick={changeFolderName}>Change folder name</button>
      </div>
    </div>
  );
}

export default ChangeNameOfFolders;