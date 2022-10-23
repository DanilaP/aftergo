import { MoreInfoSettingsFULL } from '../moreInfo';
import { LEGACY_BOX_FORM_OPTIONS } from '../../constants';
import question from '../../../../../Icons/questionIcon.png';
import Checkbox from '../../../../../Icons/checkbox.png';
import './index.scss';
import { useEffect, useState } from 'react';

const Info = ({ mainPhoto, tombStonePhoto, mapPhoto, numberOfMap, typeOfAccount, onSettingsChange }) => {
 
    const [checkSettings, setCheckSettings] = useState({...Object.values(LEGACY_BOX_FORM_OPTIONS)});

    const onChecked = (el) => {
        
        setCheckSettings({
            ...checkSettings,
            [el.id-1]: {
                ...checkSettings[el.id-1],
                status: !checkSettings[el.id-1].status
            }
        })
    }
    useEffect(() => {
        onSettingsChange(checkSettings);
    }, [checkSettings])
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
                <MoreInfoSettingsFULL moreInfo={typeOfAccount} />
                <div className='legacyBox__info-main-block'>
                    <div className='legacyBox__info-main-block-areaAndMap'>
                        <div className='legacyBox__info-main-block-areaAndMap-selectedArea'>
                            <div className='defaultTitle'>selected legacy map</div>
                            <div className='whiteTitle'>№ {numberOfMap}</div>
                        </div>
                        <div className='legacyBox__info-main-block-areaAndMap-selectedMap'>
                            <div className='defaultTitle'>selected area</div>
                            <div className='whiteTitle'>{typeOfAccount.type}</div>
                        </div> 
                    </div>
                    <div className='legacyBox__info-main-block-settings'>
                        <div className='legacyBox__info-main-block-settings-options'>
                            { Object.values(checkSettings).map( el => (
                                <div className='checkbox__block'>
                                    <button onClick={() => onChecked(el)} className='checkbox' name={el.value}>
                                        {el.status && <img src={Checkbox} width="20px" height="20px" name={el.value}/>}
                                    </button>
                                    <span>
                                        {el.text}
                                    </span>
                                    <img src={question} width="20px" height="20px" className='alt'/>
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