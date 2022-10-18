import { PRIVELEGES_PRICES } from '../../../OrderNewLand/components/constants';
import { MoreInfo } from '../../../OrderNewLand/components/moreInfo';
import { LEGACY_BOX_FORM_OPTIONS } from '../../constants';
import './index.scss';

const Info = ({ mainPhoto, tombStonePhoto, mapPhoto, selectedRoom, numberOfMap, typeOfAccount }) => {
 
    return (
        <div className='legacyBox__info'>
            <div className='legacyBox__info-photos'>
                <div className='legacyBox__info-photos-mainPhoto'>
                    <img src={mainPhoto} />
                </div>
                <div className='legacyBox__info-photos-anotherPhoto'>
                    <img src={tombStonePhoto} />
                    <img src={mapPhoto} />
                </div>
            </div>
            <div className='legacyBox__info-main'>
                <MoreInfo moreInfo={PRIVELEGES_PRICES[selectedRoom.id - 1]} />
                <div className='legacyBox__info-main-block'>
                    <div className='legacyBox__info-main-block-areaAndMap'>
                        <div className='legacyBox__info-main-block-areaAndMap-selectedArea'>
                            <div className='defaultTitle'>selected legacy map</div>
                            <div className='whiteTitle'>№ {numberOfMap}</div>
                        </div>
                        <div className='legacyBox__info-main-block-areaAndMap-selectedMap'>
                            <div className='defaultTitle'>selected area</div>
                            <div className='whiteTitle'>{typeOfAccount.name}</div>
                        </div> 
                    </div>
                    <div className='legacyBox__info-main-block-settings'>
                        <div className='legacyBox__info-main-block-settings-options'>
                            { LEGACY_BOX_FORM_OPTIONS.map( el => (
                                <div className='checkbox__block'>
                                    <input type="checkbox"/><span>{el.text}</span>
                                </div>
                            )) }
                        </div>
                        <div className='legacyBox__info-main-block-settings-price'>
                            166$
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;