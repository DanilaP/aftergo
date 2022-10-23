import './index.scss';

export const SelectAreaInfo = ({freePlaces}) => {
    return (
        <div className='selectAreaInfo'>
            <div className='selectAreaInfo__info'>
                <span className='selectAreaInfo__info__title'>Selected Area</span>
                <span className='selectAreaInfo__info__freePlaces'>Free places {freePlaces}</span>
            </div>
        </div>
    )
}