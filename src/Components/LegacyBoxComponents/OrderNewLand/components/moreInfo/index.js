import './index.scss';

export const MoreInfo = ({moreInfo}) => {
    return (
        <div className='moreInfo__legacyRoom'>
            {moreInfo.name}<span className='moreInfo__legacyRoom-price'>{moreInfo.price}</span>{moreInfo.description}
        </div>
    )
}