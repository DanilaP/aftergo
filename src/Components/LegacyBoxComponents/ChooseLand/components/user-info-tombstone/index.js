import './index.scss';
import Discord from '../../../../../Icons/discordIcon.png';
import Facebook from '../../../../../Icons/facebookIcon.png';
import Google from '../../../../../Icons/iconGoogle.png';
import Twitter from '../../../../../Icons/twitterIcon.png';

export const UserInfoTombStone = ({ userName, status, img }) => {
    return (
        <div className='userInfoTombStone'>
            <div className='userInfoTombStone__avatar'>
                
            </div>
            <div className='userInfoTombStone__info'>
                <span className='userInfoTombStone__info__title'>{userName}</span>
                <span className='userInfoTombStone__info__freePlaces'>{status}</span>
            </div>
            <div className='userInfoTombStone__info__mediaContent'>
                {/*<div>
                    <div className='userInfoTombStone__info-socialMedia' >
                        <img src={Discord} width="60%" height="60%"/>
                    </div>
                    <div className='userInfoTombStone__info-socialMedia' >
                        <img src={Twitter} width="60%" height="60%"/>
                    </div>
                </div>
                <div>
                    <div className='userInfoTombStone__info-socialMedia' >
                        <img src={Google} width="60%" height="60%" />
                    </div>
                    <div className='userInfoTombStone__info-socialMedia' >
                        <img src={Facebook} width="60%" height="60%"/>
                    </div>
                </div>*/}
            </div>
        </div>
    )
}