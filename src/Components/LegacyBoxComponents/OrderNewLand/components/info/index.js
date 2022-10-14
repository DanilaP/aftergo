import './index.scss';

export const Info = ({info}) => {

    return (
        <div className='info__legacyRoom'>
            {Object.keys(info).map(el => (
                <div className={`info__legacyRoom-item-${info[el].className}`} key={info[el].text}>
                    <div className='info__legacyRoom-item__title'>{info[el].text}</div>
                    {
                        typeof info[el].value === 'boolean' 
                        ?
                        <div className='info__legacyRoom-item__value'>{info[el].value ? 'AVAILABLE': 'NOT AVAILABLE'}</div>
                        :
                        <div className='info__legacyRoom-item__value'>{info[el].value}</div>
                    }
                </div>
            ))}
        </div>
    )
}