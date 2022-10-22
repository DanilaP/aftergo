import './index.scss';

export const MoreInfo = ({moreInfo}) => {
    return (
        <div className='moreInfo__legacyRoom'>
            {moreInfo?.type}<span className='moreInfo__legacyRoom-price'>{moreInfo?.price}$</span>recurring fee (Q/A/20y)
        </div>
    )
}