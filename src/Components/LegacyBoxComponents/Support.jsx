import './Support.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import $api from '../Axios';

function Support() {
    const history = useNavigate();
    const [topic, setTopic] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    const closeModal = () => {
        history("/ChooseLandMenu");
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
            history("/ChooseLandMenu");
        })
        .catch((error) => {
            console.log(error);
        })
    }   
  return (
    <div className="support__modal__box">
        <div className="support__box">
            <div onClick={closeModal} className='close__btn'>
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
                <button>CANCEL</button>
                <button onClick={sendMessageToSupport}>SEND</button>
            </div>
        </div>
    </div>
  );
}

export default Support;