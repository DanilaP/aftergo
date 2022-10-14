import './Profile.scss';
import { useNavigate } from 'react-router-dom';
import userAvatar from '../../Icons/userAvatar.png';
import { useState } from 'react';
import { useEffect } from 'react';
import $api from '../Axios';
import { useRef } from 'react';
import store from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import Cropper from './Cropper';

function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const [disableInput, setDisableInput] = useState(true);
    const [inputText, setInputText] = useState("EDIT");
    const [netWorkActive, setNetWorkActive] = useState(false);
    const [userData, setUserData] = useState({});
    const history = useNavigate();
    const oldPasswordInput = useRef();
    const [newPassword, setNewPassword] = useState("");
    const [newUserName, setNewUserName] = useState(userData.firstName);
    const [newUserLastName, setNewLastUserName] = useState(userData.lastName);
    const [oldPassword, setOldPassword] = useState("");
    const [avatar, setAvatar] = useState();
    const dispatch = useDispatch();
    const lastRoute = useSelector(store => store.lastRoute);

    const closeModal = () => {
        history(lastRoute);
    }
    const setNetworkConnection = () => {
        store.dispatch({type: "LASTROUTE", payload: "/Profile"});
        history("/ProfileNetworkConnection");
    }
    const startEditing = async () => {
        setDisableInput(false);
        setIsEditing(true);
        setInputText("SAVE");
        oldPasswordInput.current.value = "";
        console.log(userData);
        
        if (isEditing) {
            let userNewData = {};
            if ((oldPassword && newPassword) !== "") {
                userNewData = {
                    firstName: newUserName,
                    lastName: newUserLastName,
                    password: newPassword,
                    oldPassword: oldPassword,
                }
            }
            else {
                userNewData = {
                    firstName: newUserName,
                    lastName: newUserLastName,
                }
            }
            $api.patch('https://aftergo-api-dev.azurewebsites.net/api/auth/me', userNewData)
            .then((response) => {
                console.log("данные успешно сменены");
                stopEditing();
            })  
            .catch((error) => {
                console.log(error);
            })    
        }
        else {
            return;
        }
    }
    const stopEditing = () => {
        setDisableInput(true);
        setIsEditing(false);
        setInputText("EDIT");
        oldPasswordInput.current.value = "oldpassword";
    }
    useEffect(() => {
        $api.get('https://aftergo-api-dev.azurewebsites.net/api/auth/me')
        .then((response) => {
            setUserData(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])
    useEffect(() => {
        if (avatar) {
            let formData = new FormData();
            formData.append('file', avatar[0]);
            console.log(avatar[0]);
            $api.patch('https://aftergo-api-dev.azurewebsites.net/api/auth/me/image', formData)
            .then((response) => {
                dispatch({type: "SETUSERIMAGE", payload: response.data.image});
                setUserData(response.data);
                //history("/Cropper");
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }, [avatar])
  return (
    <div className="profile__modal__box">
        <div className="profile__box">
            <div className="header__text">
                <div className='text'>MY PROFILE</div>
                <div onClick={closeModal} className='close__btn'/>
            </div>
            <div className="profile__info">
                <div className="user__avatar__box">
                    <div className="div__img">
                        <img src = {userData.image} />
                    </div>
                    <div className="add__social__networks">
                        {isEditing 
                        ? <div className='input__file'>
                            <input onChange={(e) => setAvatar(e.target.files)} type = "file" />
                            <span>upload a photo</span>
                        </div>
                        : <div className='flex__cont'>
                        <div className="add__social__networks__button">
                            <div onClick={setNetworkConnection} className="text">
                                +
                            </div>
                        </div>
                        <div className="social__networks__text">
                            add social networks to log in faster
                        </div>
                        </div>
                        }
                    </div>
                    {netWorkActive ? <div className="untie__network">untie</div> : null}
                </div>
                <div className="user__personal__info__box">
                    <div className="personal__data__settings">
                        <div>Personal data</div>
                        <input defaultValue={userData.firstName} 
                            disabled = {disableInput} 
                            type = "text" 
                            placeholder='First name' 
                            onChange={(e) => setNewUserName(e.target.value)}/>
                        <input defaultValue={userData.lastName} 
                            disabled = {disableInput} 
                            type = "text" 
                            placeholder='Last name' 
                            onChange={(e) => setNewLastUserName(e.target.value)}/>
                        <input defaultValue={userData.birthday?.substring(0,10)} 
                            disabled = {true} 
                            type = "date" 
                            placeholder='Date of birth' />
                    </div>
                    <div className="account__settings">
                        <div>Account</div>
                        <input defaultValue={userData.email} 
                            disabled = {true} 
                            type = "text" 
                            placeholder='Email' />
                        <input placeholder = "Old password" 
                            defaultValue={'oldpassword'} 
                            disabled = {disableInput} 
                            type = "password" 
                            ref={oldPasswordInput}
                            onChange = {(e) => {setOldPassword(e.target.value)}}/>
                        {isEditing ? <input onChange={(e) => setNewPassword(e.target.value)} type = "password" placeholder='New password'/> : null}
                    </div>
                </div>
                <div className="box__with__buttons">
                    <button onClick={stopEditing}>EXIT</button>
                    <button onClick={startEditing}>{inputText}</button>
                </div> 
            </div>
        </div>
    </div>
  );
}

export default Profile;