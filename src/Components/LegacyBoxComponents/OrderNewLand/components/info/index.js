import './index.scss';

export const Info = ({ info }) => {
    console.log(info);
    return (
        <div className='info__legacyRoom'>
            {info?.data?.map(el => {
                let CLASS__NAME = '';
                if (!el.highlight) CLASS__NAME = 'default';
                if (el.highlight && el.available) CLASS__NAME = 'active';
                if (el.highlight && !el.available) CLASS__NAME = 'inactive';
                return (
                    <div className={`info__legacyRoom-item-${CLASS__NAME}`} key={el.key}>
                    <div className='info__legacyRoom-item__title'>{el.key}</div>
                    {/*
                        typeof info[el].value === 'boolean' 
                        ?
                        <div className='info__legacyRoom-item__value'>{info[el].value ? 'AVAILABLE': 'NOT AVAILABLE'}</div>
                        :*/
                        <div className='info__legacyRoom-item__value'>{el.value}</div>
                    }
                    </div>
                )
            })}
        </div>
    )
}