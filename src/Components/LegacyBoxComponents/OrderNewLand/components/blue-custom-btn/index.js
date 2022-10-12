import './index.scss';

export const BlueCustomBtn = ({text, onClick, disabled}) => {
    return (
        <button className='blueCustomBtn' onClick={onClick} disabled={disabled} >{text}</button>
    )
}