import './ProfileNetworkConnection.scss';
import { useNavigate } from 'react-router-dom';
import discord from '../../Icons/discordIcon.png';
import google from '../../Icons/iconGoogle.png';
import facebook from '../../Icons/facebookIcon.png';
import twitter from '../../Icons/twitterIcon.png';
import store from '../../store';
import { useSelector } from 'react-redux';

function ProfileNetworkConnection() {
    const lastRoute = useSelector(store => store.lastRoute);
    const history = useNavigate();
    const closeModal = () => {
        history(lastRoute);
    }
  return (
    <div className="profile__network__modal__box">
        <div className="profile__network__box">
            <div onClick={closeModal} className='close__btn'/>
            <div className="header">Social networks</div>
            <div className="small__text">
                Choose a social network to link to your account<br />
                and secure your account
            </div>
            <div className="buttons__box">
                <button className='discord__btn'>
                    <div className="btn__text">Discord</div>
                    <img src = {discord}/>
                </button>
                <button className='google__btn'>
                    <div className="btn__text">Google</div>
                    <img src = {google}/>
                </button>
                <button className='facebook__btn'>
                    <div className="btn__text">Facebook</div>
                    <img src = {facebook}/>
                </button>
                <button className='twitter__btn'>
                    <div className="btn__text">Twitter</div>
                    <img src = {twitter}/>
                </button>
            </div>
        </div>
    </div>
  );
}

export default ProfileNetworkConnection;