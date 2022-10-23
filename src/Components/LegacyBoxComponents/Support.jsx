import './Support.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import $api from '../Axios';
import store from '../../store';
import { useSelector } from 'react-redux';

function Support() {
    const history = useNavigate();
    const [topic, setTopic] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const lastRoute = useSelector(store => store.lastRoute);

    const closeModal = () => {
        history(lastRoute);
    }
    const sendMessageToSupport = () => {
        let supportMessage = {
            topic: topic,
            email: email,
            description: description
        }
        $api.post("https://aftergo-api-dev.azurewebsites.net/api/support", supportMessage)
        .then((response) => {
            console.log(response);
            history(lastRoute);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
  return (
    <div className="support__modal__box">
        <div className="support__box">
            <div onClick={closeModal} className='close__btn'>
                x
            </div>
            <div className="header__text">
                SUPPORT
            </div>
            <div className="header__small__text">
                Write to support if you have any difficulties.
            </div>
            <div className="inputs__box">
                <input onChange={(e) => setTopic(e.target.value)} type = "text" placeholder='Topic'/>
                <input onChange={(e) => setEmail(e.target.value)} type = "text" placeholder='Your email'/>
            </div>
            <div className="text__area__box">
                <textarea onChange={(e) => setDescription(e.target.value)} placeholder='Description'></textarea>
            </div>
            <div className="buttons">
                <button onClick={closeModal}>CANCEL</button>
                <button onClick={sendMessageToSupport}>SEND</button>
            </div>
        </div>
    </div>
  );
}

export default Support;