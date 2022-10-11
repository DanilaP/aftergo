import './DeleteFileModalBox.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from "react-redux";

function DeleteFileModalBox() {
  const goToPrev = () => {

  }
  const deleteFile = () => {

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
