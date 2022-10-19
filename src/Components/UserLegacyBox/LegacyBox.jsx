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
import CreateFolderBox from './CreateFolderBox';
import ChangeNameOfFiles from './ChangeNameOfFiles';
import ChangeNameOfFolders from './ChangeNameOfFolders';
import ChangeNameOfLegacyBox from './ChangeNameOfLegacyBox';
import DeleteFileModalBox from './DeleteFileModalBox';
import ImageSlider from './ImageSlider';
import video from '../../Icons/video.png';
import VideoPlayer from './VideoPlayer';
import Loader from '../Loader/Loader';

function LegacyBox() {
    const history = useNavigate();
    const [userFiles, setUserFiles] = useState([]);
    const [userFolders, setUserFolders] = useState([]);
    const [fileHistory, setFileHistory] = useState([]);
    const [uploadedFile, setUploadedFile] = useState();
    const [nameShown, setNameShown] = useState(false);
    const [landId, setLandId] = useState();
    const [ourFolderId, setOurFolderId] = useState();
    const [tombstoneImage, setTombStoneImage] = useState();
    const [legacyRoomImage, setlegacyRoomImage] = useState();

    const modalShow = useSelector(store => store.isCreateFolderShown);
    //Change file//
    const changeFileName = useSelector(store => store.changeFileName);
    const [changedFile, setChangedFile] = useState();
    //Change folder//
    const [changedFolder, setChangedFolder] = useState();
    const changeFolderName = useSelector(store => store.changeFolderName);
    //Change legacyBox//
    const [legacyBoxName, setLegacyBoxName] = useState();
    const changeLegacyBoxName = useSelector(store => store.changeLegacyBoxName);
    //Delete file//
    const deleteFileBox = useSelector(store => store.isDeleteFileShown);
    const [deletedFile, setDeletedFile] = useState();
    const [deletedFileType, setDeletedFileType] = useState();
    //ImageSlider//
    const imageSliderShown = useSelector(store => store.imageSliderShown);
    const [imageForOurSlider, setImageForOurSlider] = useState({});
    const imageTypes = ["png", "jpeg", "GIF", "TIFF", "BMP", "PSD", "PICT","EPS"];
    const textTypes = ["txt", "pdf", "doc", "docx", "xls"];
    const videoTypes = ["flv", "avi", "mp4", "3gp", "wmv", "webm"];
    //Video//
    const isVideoShown = useSelector(store => store.videoShown);
    const [userVideo, setUserVideo] = useState({});
    //Loader//
    const [loaderShown, setLoaderShown] = useState(false);

    useEffect(() => {
        setLoaderShown(true);
        $api.get('https://aftergo-api-dev.azurewebsites.net/api/lands/mine')
        .then((response) => {
            setLegacyBoxName(response.data.name);
            //$api.get('https://aftergo-api-dev.azurewebsites.net/api/folders/'+ response.data[0].folderId)
            $api.get('https://aftergo-api-dev.azurewebsites.net/api/folders/93effff5-71a3-4b20-b20d-1277ea116552')
            .then((response) => {
                console.log(response);
                setLandId(response.data.landId);
                setOurFolderId(response.data.id); // устанавливаем id папки в которой находимся

                setFileHistory([...fileHistory, response.data.id]); //добавляем рутовую папку первой в историю
                setUserFiles(response.data.files); //выгружаем массив файлов с рутовой папки
                setUserFolders(response.data.folders); //выгружаем массив папок с рутовой папки
                setLoaderShown(false);
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
        //console.log(fileHistory);
    }, [fileHistory])


    const goInsideFolder = async (folderId) => {
        setLoaderShown(true);
        setOurFolderId(folderId); //меняем id папки в которой находимся и получаем ее данные
        await $api.get('https://aftergo-api-dev.azurewebsites.net/api/folders/' + folderId)
        .then((response) => {
                setFileHistory([...fileHistory, folderId]); //добавляем эту папку в историю
            setUserFiles(response.data.files);
            setUserFolders(response.data.folders);
        })
        .catch((error) => {
            console.log(error);
        })
        setLoaderShown(false);
    }
    const goBackToFolder = async () => {
        setLoaderShown(true);
        let newHistory = fileHistory.slice(0, -1);
        setFileHistory(newHistory);
        setOurFolderId(newHistory[fileHistory.length - 1]); // меняем текущую папку

        await $api.get('https://aftergo-api-dev.azurewebsites.net/api/folders/' + newHistory[newHistory.length - 1])
        .then((response) => {
            setUserFiles(response.data.files);
            setUserFolders(response.data.folders);
        })
        .catch((error) => {
            console.log(error);
        })
        setLoaderShown(false);
    }





    const uploadFiles = async (userFile) => {
        const formData = new FormData(); 
        formData.append("file", userFile[0]);
        let fileName = userFile[0].name.split('.'); //получаем имя файла
        formData.append("title", fileName[0]);
        formData.append("landId", landId);
        formData.append("folderId", ourFolderId);
        formData.append("access", "private");

         await $api.post('https://aftergo-api-dev.azurewebsites.net/api/files', formData) 
         .then((response) => {
            console.log(response);
            let newFile = {
                id: response.data.id,
                image: response.data.blobId,
                folderId: response.data.folderId,
                landId: response.data.landId,
                title: response.data.title,
                format: response.data.format,
                access: response.data.access
            }
            setUserFiles([...userFiles, newFile]);
         })
         .catch((error) => {
            console.log(error);
         })
    }
    const deleteFiles = async (deletedFileId) => {
        setDeletedFile(userFiles[deletedFileId].id);
        setDeletedFileType("files");
        store.dispatch({type: "DELETEFOLDERFILEMODALBOX", payload: true});
    }
    const updateDeletedFiles = (file) => {
        setUserFiles(userFiles.filter(el => el.id !== file));
    }
    const createFolder = () => {
        store.dispatch({type: "CREATEFOLDERSHOWN", payload: true});
    }
    const deleteFolder = async (deletedFolderId, element) => {
        element.stopPropagation();
        setDeletedFile(userFolders[deletedFolderId].id);
        setDeletedFileType("folders");
        store.dispatch({type: "DELETEFOLDERFILEMODALBOX", payload: true});
    }
    const updateDeletedFolders = (folder) => {
        setUserFolders(userFolders.filter(el => el.id !== folder));
    }
    const getData = (data) => {
        setUserFolders([...userFolders, data]);
    }



    const createNewFileName = (id) => {
        setChangedFile({
            title: "",
            folderId: ourFolderId,
            access: "private",
            fileId: userFiles[id].id,
        })
        store.dispatch({type: "CHANGEFILENAME", payload: true});
    }
    const getNewFileName = (newFile) => {
        let updatedArray = userFiles;
        let indexElem, elem;

        updatedArray.map((el, index) => {
            if (el.id === newFile.id) {
                indexElem = index;
                elem = el;
            }
        })
        updatedArray[indexElem] = {...elem, title: newFile.title};
        setUserFiles(updatedArray);
    }

    const createNewFolderName = (id) => {
        setChangedFolder({
            folderId: userFolders[id].id,
            name: userFolders[id].name,
        })
        store.dispatch({type: "CHANGEFOLDERNAME", payload: true});
    }
    const getNewFolderName = (newFolder) => {
        let updatedFolderArray = userFolders;
        let indexElem, elem;

        updatedFolderArray.map((el, index) => {
            if (el.id === newFolder.id) {
                indexElem = index;
                elem = el;
            }
        })
        updatedFolderArray[indexElem] = {...elem, name: newFolder.name};
        setUserFolders(updatedFolderArray);
    }

    const createNewLegacyBoxName = () => {
        store.dispatch({type: "CHANGELEGACYBOXNAME", payload: true});
    }
    const getNewLegacyBoxName = (newName) => {
        setLegacyBoxName(newName);
    }
    const showImages = (image) => {
        if (imageTypes.indexOf(image.format.split("/").pop()) != -1) {
            let imageForSlider = {
                src: image.image,
                width: 0,
                height: 0,
                type: image.format,
            };
            let imageInfo = new Image;
            imageInfo.src = image;
            imageInfo.onload = function(){
                let height = imageInfo.height;
                let width = imageInfo.width;
    
                imageForSlider.width = width;
                imageForSlider.height = height;
            }
            setImageForOurSlider(imageForSlider);
            store.dispatch({type: "IMAGESLIDERSHOWN", payload: true});
        }
    }
    const showVideo =  (video) => {
        store.dispatch({type: "VIDEOSHOWN", payload: true});
        setUserVideo(video);
    }
  return (
    <div>
        {loaderShown ? <Loader /> : null}
        {isVideoShown ? <VideoPlayer video = {userVideo} /> : null}
        {imageSliderShown ? <ImageSlider image = {imageForOurSlider} /> : null}
        {deleteFileBox ? <DeleteFileModalBox funcForFolders = {updateDeletedFolders} funcForFiles = {updateDeletedFiles} deletedType = {deletedFileType} object = {deletedFile} /> : null}
        {changeLegacyBoxName ? <ChangeNameOfLegacyBox id = {landId} func = {getNewLegacyBoxName} object = {legacyBoxName} /> : null}
        {changeFolderName ? <ChangeNameOfFolders func = {getNewFolderName} object = {changedFolder} /> : null }
        {changeFileName ? <ChangeNameOfFiles func = {getNewFileName} object = {changedFile} /> : null}
        {modalShow ? <CreateFolderBox func = {getData} object = {{name: "", landId: landId, folderId: ourFolderId}} isShown = {modalShow} /> : null }
    <div className="user__legacy__box">
        <div className="mini__menu">
            <div onClick={createNewLegacyBoxName} className="legacy__box__name">{legacyBoxName}</div>
            <div onClick={goBackToFolder}>Back to folder</div>
            <div className="profile__button"><img width={"80px"} height = {"80px"} src = {profileImage}/></div>
            <div className="support__button"><img width={"80px"} height = {"80px"} src = {aboutUsImage}/></div>
            <div className="support__button"><img width={"80px"} height = {"80px"} src = {supportImage}/></div>
        </div>
        <div className="legacy__box__main">
            <div className="file__box">
                {userFiles.map((el, id) => {
                    if (loaderShown) {
                        <Loader />
                    }
                    else if (imageTypes.indexOf(el.format.split("/").pop()) != -1) {
                        return (
                            <div>
                                <div className='file'>
                                    <div onClick={() => deleteFiles(id)} className='delete__btn'>+</div>
                                    <img onDoubleClick={() => showImages(userFiles[id])} src = {userFiles[id].image} /> 
                                    <span onDoubleClick={() => createNewFileName(id)}>{userFiles[id].title}</span>
                                </div>
                            </div>
                        )
                    }
                    else if (videoTypes.indexOf(el.format.split("/").pop()) != -1) {
                        return (
                            <div>
                                <div className='file'>
                                    <div onClick={() => deleteFiles(id)} className='delete__btn'>+</div>
                                    <img className='video__image' onDoubleClick={() => showVideo(userFiles[id])} src = {video}/>
                                    <span onDoubleClick={() => createNewFileName(id)}>{userFiles[id].title}</span>
                                </div>
                            </div>
                        )
                    }
                })}
                {userFolders.map((el, id) => {
                    return (
                        <div className='file__folder'>
                            <div onClick={() => goInsideFolder(el.id)}>
                                <div onClick={(e) => deleteFolder(id, e)} className='delete__btn'>+</div>
                                <img className='folder' src = {folder}/>   
                            </div>
                            <span onDoubleClick={() => createNewFolderName(id)}>{userFolders[id].name}</span>
                        </div>
                    )
                })}
            </div>
            <div className="info__box">
                <div className='information'>
                    <div className='header'>STANDART</div>
                    <div className='line'></div>
                    <div className='open__info__button'>OPEN</div>
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
                <div onClick={createFolder} className='new__folder'>
                    + New folder
                </div>
                <div className='upload__files'> 
                    <input name='userChoosedFile' onChange={(e) => uploadFiles(e.target.files)} type = "file"/>
                    <button>UDPLOAD FILES</button>
                    <button>UDPLOAD FROM LINK</button>
                </div>
            </div>
            <div className="navigate__buttons">
                <img src = {shareImage}/>
                <button>VISIT CEMETRY</button>
                <button>ORDER NEW LAND</button>
            </div>
        </div>
    </div>
    </div>
  );
}

export default LegacyBox;