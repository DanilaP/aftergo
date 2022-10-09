import './LegacyBox.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import $api from '../Axios';
import store from '../../store';
import { useSelector } from 'react-redux';
import legacy__room from '../../Icons/legacy__room__4.png';
import map from '../../Icons/map.png';
import tomb from '../../Icons/tombstoneExample.png';
import supportImage from '../../Icons/Support.png';
import shareImage from '../../Icons/Share.png';
import aboutUsImage from '../../Icons/AboutUs.png';
import profileImage from '../../Icons/Profile.png';
import { useEffect } from 'react';
import folder from '../../Icons/folder.png';
import { useRef } from 'react';

function LegacyBox() {
    const history = useNavigate();
    const [userFiles, setUserFiles] = useState([]);
    const [userFolders, setUserFolders] = useState([]);
    const [fileHistory, setFileHistory] = useState([]);
    const [uploadedFile, setUploadedFile] = useState();
    const [nameShown, setNameShown] = useState(false);
    const [landId, setLandId] = useState();
    const [ourFolderId, setOurFolderId] = useState();

    

    useEffect(() => {
        $api.get('https://aftergo-api-dev.azurewebsites.net/api/lands/mine')
        .then((response) => {
            //$api.get('https://aftergo-api-dev.azurewebsites.net/api/folders/'+ response.data[0].folderId)
            $api.get('https://aftergo-api-dev.azurewebsites.net/api/folders/93effff5-71a3-4b20-b20d-1277ea116552')
            .then((response) => {
                console.log(response);
                setLandId(response.data.landId);
                setOurFolderId(response.data.id); // устанавливаем id папки в которой находимся

                setFileHistory([...fileHistory, response.data.id]); //добавляем рутовую папку первой в историю
                setUserFiles(response.data.files); //выгружаем массив файлов с рутовой папки
                setUserFolders(response.data.folders); //выгружаем массив папок с рутовой папки
            })
            .catch((error) => {
                console.log(error);
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])
    useEffect(() => {
        console.log(ourFolderId);
    }, [ourFolderId])

    const goInsideFolder = (folderId) => {
        setOurFolderId(folderId); //меняем id папки в которой находимся и получаем ее данные
        $api.get('https://aftergo-api-dev.azurewebsites.net/api/folders/' + folderId)
        .then((response) => {
            if (fileHistory.length != 1) {
                setFileHistory([...fileHistory, folderId]); //добавляем эту папку в историю
            }
            setUserFiles(response.data.files);
            setUserFolders(response.data.folders);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    const goBackToFolder = () => {
        $api.get('https://aftergo-api-dev.azurewebsites.net/api/folders/' + fileHistory[fileHistory.length - 1])
        .then((response) => {
            if (fileHistory.length != 1) {
                let newHistory = fileHistory.splice(-1);
                setFileHistory(newHistory);
                setOurFolderId(newHistory[fileHistory.length - 1]) // меняем текущую папку
            }
            setUserFiles(response.data.files);
            setUserFolders(response.data.folders);
        })
        .catch((error) => {
            console.log(error);
        })
    }





    const uploadFiles = async (userFile) => {
        const formData = new FormData(); 
        formData.append("file", userFile[0]);
        let fileName = userFile[0].name.split('.'); //получаем имя файла
        formData.append("title", fileName[0]);
        formData.append("landId", landId);
        formData.append("folderId", ourFolderId);
        formData.append("access", "private");

         $api.post('https://aftergo-api-dev.azurewebsites.net/api/files', formData) 
         .then((response) => {
            console.log(response);
         })
         .catch((error) => {
            console.log(error);
         })
    }
  return (
    <div className="user__legacy__box">
        <div className="mini__menu">
            <div onClick={goBackToFolder}>Back to folder</div>
            <div className="profile__button"><img width={"80px"} height = {"80px"} src = {profileImage}/></div>
            <div className="aboutUs__button"><img width={"80px"} height = {"80px"} src = {shareImage}/></div>
            <div className="support__button"><img width={"80px"} height = {"80px"} src = {aboutUsImage}/></div>
            <div className="support__button"><img width={"80px"} height = {"80px"} src = {supportImage}/></div>
        </div>
        <div className="legacy__box__main">
            <div className="file__box">
                {userFiles.map((el, id) => {
                    return (
                        <div>
                            <img src = {userFiles[id].image}/> 
                            <span>{userFiles[id].title}</span>
                        </div>
                    )
                })}
                {userFolders.map((el, id) => {
                    return (
                        <div>
                            <div onClick={() => goInsideFolder(el.id)}>
                                <img className='folder' src = {folder}/>   
                            </div>
                            <span>{userFolders[id].name}</span>
                        </div>
                    )
                })}
            </div>
            <div className="info__box">
                <div className='information'>
                    <div className="info__elem">8th map</div>
                    <div className="info__elem">Legacy room</div>
                    <div className="info__elem">Large land</div>
                    <div className="info__elem">Tombstone: moon</div>
                </div>
                <div className="legacy__storage__size">
                    <progress max={100} value = {20}></progress>
                    <div>free 24 GB of 30 GB</div>
                </div>
                <div className="images__stone__map">
                    <img className='map__img' src = {map} />
                    <img src = {tomb} />
                </div>
                <div className="images__room">
                    <img src = {legacy__room}/>
                </div>
            </div>
            <div className="redaction__buttons">
                <div className='new__folder'>
                    + New folder
                </div>
                <div className='upload__files'>
                    <input onChange={(e) => uploadFiles(e.target.files)} type = "file"/>
                    <button>UDPLOAD FILES</button>
                    <button>UDPLOAD FROM LINK</button>
                </div>
            </div>
            <div className="navigate__buttons">
                <button>VISIT CEMETRY</button>
                <button>ORDER NEW LAND</button>
            </div>
        </div>
    </div>
  );
}

export default LegacyBox;