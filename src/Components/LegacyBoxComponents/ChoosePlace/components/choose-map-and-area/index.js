import { MapNumberSlider } from '../map-number-slider';
import './index.scss';

export const ChooseMapAndArea = ({onChange, number}) => {

    return (
        <div className='chooseMapAndArea'>
            <div className='chooseMapAndArea__title'>Choose the map and area</div>
            <MapNumberSlider onChange={onChange} number={number} />
        </div>
    )
}