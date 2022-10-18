import { useState } from 'react';
import { LEGACY_BOX_TARIFFS } from '../../constants';
import './index.scss'

const VariableTariffs = () => {
    const [tariffs, setTariffs] = useState(LEGACY_BOX_TARIFFS);
    return (
        <div className='legacy_box_tariffs'>
            { tariffs.map(tariff => (
                <div className='legacy_box_tariffs-each'>
                    <div className='legacy_box_tariffs-each-title'>{tariff.name}</div>
                    <div className='legacy_box_tariffs-each-period'>{tariff.period}</div>
                    <div className='legacy_box_tariffs-each-price'>{tariff.price}</div>
                    <button className='legacy_box_tariffs-each-action active'>SELECT</button>
                </div>
            )) }
        </div>
    )
}

export default VariableTariffs;