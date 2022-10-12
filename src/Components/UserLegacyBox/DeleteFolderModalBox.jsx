import './DeleteFileModalBox.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from "react-redux";
import store from '../../store';
import $api from '../Axios';

function DeleteFolderModalBox({deletedId}) {
  const goToPrev = () => {
    store.dispatch({type: "DELETEFOLDERMODALBOX", payload: false});
  }
  const deleteFolder = () => {
    $api.delete('https://aftergo-api-dev.azurewebsites.net/api/folders' + deletedId)
      .then((response) => {
          console.log(response);
          store.dispatch({type: "DELETEFOLDERMODALBOX", payload: false});
      })
      .catch((error) => {
          console.log(error);
      })
  }
  return (
    <div className="DeleteFileModalBox">
        <div className="delete__box">
            <div className="delete__box__header">Delete folder</div>
            <div className="small__text">Are you sure you want to delete the file? You can't return it.</div>
            <div className="buttons">
                <button onClick={deleteFolder}>DELETE</button>
                <button onClick={goToPrev}>CANCEL</button>
            </div>
        </div>
    </div>
  );
}

export default DeleteFolderModalBox;
