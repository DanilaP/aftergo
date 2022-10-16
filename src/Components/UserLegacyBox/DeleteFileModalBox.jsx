import './DeleteFileModalBox.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from "react-redux";
import store from '../../store';
import $api from '../Axios';

function DeleteFileModalBox({object, deletedType, funcForFiles, funcForFolders}) {
  const goToPrev = () => {
    store.dispatch({type: "DELETEFOLDERFILEMODALBOX", payload: false});
  }
  const deleteFile = async () => {
   if (deletedType === "folders") {
      await $api.delete('https://aftergo-api-dev.azurewebsites.net/api/folders/' + object)
      .then((response) => {
          console.log(response);
          funcForFolders(object);
      })
      .catch((error) => {
          console.log(error);
      })
   }
   else {
      await $api.delete('https://aftergo-api-dev.azurewebsites.net/api/files/' + object)
      .then((response) => {
          console.log(response)
          funcForFiles(object);
      })
      .catch((error) => {
          console.log(error);
      })
   }
   store.dispatch({type: "DELETEFOLDERFILEMODALBOX", payload: false});
  }
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
