import './index.scss';

export const ModalCustomDesign = ({title, subtitle, btnText, onClick}) => {
    return (
        <div className='modal__wrap'>
            <div className='modal__wrap-content'>
                <div className='modal__wrap-content-title'>
                    {title}
                    <div className='modal__wrap-content-subtitle'>
                        {subtitle}
                    </div>
                </div>
                <button className='modal__wrap-content-action' onClick={onClick}>
                    {btnText}
                </button>
            </div>
        </div>
    )
}