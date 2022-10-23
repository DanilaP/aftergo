import { useEffect, useState } from 'react';
import { getAllSubscriptionsPlans } from '../../../../../Api/request';
import './index.scss'

const VariableTariffs = ({ selectedTypeOfAccount }) => {
    const [tariffs, setTariffs] = useState([]);

    useEffect(() => {
        getAllSubscriptionsPlans().then(res => {
            setTariffs(() => res.data.filter(el => el.type === selectedTypeOfAccount.type)[0].recurringPricing.map((el) => {
                return {
                    ...el,
                    name: el.monthsDuration === 3 ? 'quarterly' : el.monthsDuration === 12 ? 'annualy': '20 years',
                    period: `Every ${el.monthsDuration} month` 
                }
            }))
        });
    }, [])
    return (
        <div className='legacy_box_tariffs'>
            { tariffs?.map(tariff => (
                <div className='legacy_box_tariffs-each'>
                    <div className='legacy_box_tariffs-each-title'>{tariff?.name}</div>
                    <div className='legacy_box_tariffs-each-period'>{tariff?.period}</div>
                    <div className='legacy_box_tariffs-each-price'>{tariff?.price}$</div>
                    <button className='legacy_box_tariffs-each-action active'>SELECT</button>
                </div>
            )) }
        </div>
    )
}

export default VariableTariffs;