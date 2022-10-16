import './index.scss';

export const SelectedLegacyMap = ({ numberOfMap }) => {
    return (
        <div className='selectedLegacyMap'>
            <div className='selectedLegacyMap__info'>
                <span className='selectedLegacyMap__info__title'>Selected legacy map</span>
                <span className='selectedLegacyMap__info__freePlaces'>№ {numberOfMap}</span>
            </div>
        </div>
    )
}