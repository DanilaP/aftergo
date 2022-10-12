import './index.scss';

export const UserInfoTombStone = ({ userName, status, img }) => {
    return (
        <div className='userInfoTombStone'>
            <div className='userInfoTombStone__avatar'>
                
            </div>
            <div className='userInfoTombStone__info'>
                <span className='userInfoTombStone__info__title'>{userName}</span>
                <span className='userInfoTombStone__info__freePlaces'>{status}</span>
            </div>
        </div>
    )
}