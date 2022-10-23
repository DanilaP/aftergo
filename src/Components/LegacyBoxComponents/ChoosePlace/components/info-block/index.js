import './index.scss';

export const InfoBlock = ({ text }) => {
    return (
        <div className='infoBlock'>
            <span className='infoBlock__mainText'>Subscribtion</span>
            <span className='infoBlock__subText'>{text}</span>
        </div>
    )
}