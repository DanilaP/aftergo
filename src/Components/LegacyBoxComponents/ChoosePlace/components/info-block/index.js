import './index.scss';

export const InfoBlock = ({ text }) => {
    return (
        <div className='infoBlock'>
            <span className='infoBlock__mainText'>Subscribe</span>
            <span className='infoBlock__subText'>{text}</span>
        </div>
    )
}