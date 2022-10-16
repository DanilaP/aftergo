import './ChangeNameOfFiles.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import store from '../../store';
import $api from '../Axios';

function ChangeNameOfFiles({object, func}) {
    const [newFileName, setNewFileName] = useState("");
    const goToPrev = () => {    
        store.dispatch({type: "CHANGEFILENAME", payload: false});
    }
    const changeFileName = () => {
        let newFile = {
            title: newFileName,
            folderId: object.folderId,
            access: object.access
        }
        $api.patch("https://aftergo-api-dev.azurewebsites.net/api/files/" + object.fileId, newFile)
        .then((response) => {
            store.dispatch({type: "CHANGEFILENAME", payload: false});
            func(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }
  return (
    <div onClick={goToPrev} className="ChangeNameOfFiles">
      <div onClick={(e) => e.stopPropagation()} className="change__box">
        <input onChange={(e) => setNewFileName(e.target.value)} placeholder='New file name' />
        <button onClick={changeFileName}>Change file name</button>
      </div>
    </div>
  );
}

export default ChangeNameOfFiles;
