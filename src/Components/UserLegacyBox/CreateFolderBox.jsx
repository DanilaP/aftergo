import './CreateFolderBox.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from "react-redux";
import store from '../../store';
import $api from '../Axios';

function CreateFolderBox({object}) {
  const [nameOfFolder, setNameOfFolder] = useState("");

  const goToPrev = () => {
    store.dispatch({type: "CREATEFOLDERSHOWN", payload: false});
  }
  const createFolder = () => {
    let folderObject = object;
    folderObject.name = nameOfFolder;
    $api.post('https://aftergo-api-dev.azurewebsites.net/api/folders', folderObject)
    .then((response) => {
      store.dispatch({type: "CREATEFOLDERSHOWN", payload: false});
    })
    .catch((error) => {
      console.log(error);
    })
  }
  return (
    <div onClick={goToPrev} className="CreateFolderBox">
        <div onClick={(e) => e.stopPropagation()} className="create__box">
            <input onChange={(e) => setNameOfFolder(e.target.value)} placeholder='Name folder' />
            <button onClick={createFolder}>CREATE</button>
        </div>
    </div>
  );
}

export default CreateFolderBox;