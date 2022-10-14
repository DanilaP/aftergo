import './DeleteFileModalBox.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from "react-redux";
import store from '../../store';
import $api from '../Axios';

function DeleteFileModalBox({}) {
  const id = useSelector((store) => store.deleteFileId);
  const goToPrev = () => {
    store.dispatch({type: "DELETEFOLDERFILEMODALBOX", payload: false});
  }
  const deleteFile = () => {
    $api.delete('https://aftergo-api-dev.azurewebsites.net/api/files/' + id)
      .then((response) => {
          console.log(response);
          store.dispatch({type: "DELETEFOLDERFILEMODALBOX", payload: false});
      })
      .catch((error) => {
          console.log(error);
      })
  }
  useEffect(() => {
    console.log(store.deleteFileId);
  })
  return (
    <div className="DeleteFileModalBox">
        <div className="delete__box">
            <div className="delete__box__header">Delete file</div>
            <div className="small__text">Are you sure you want to delete the file? You can't return it.</div>
            <div className="buttons">
                <button onClick={deleteFile}>DELETE</button>
                <button onClick={goToPrev}>CANCEL</button>
            </div>
        </div>
    </div>
  );
}

export default DeleteFileModalBox;
