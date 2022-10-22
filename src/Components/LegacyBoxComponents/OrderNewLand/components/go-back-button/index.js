import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './index.scss';

export const GoBackButton = () => {

    const lastRouteMenu = useSelector(store => store.lastRouteMenu);
    const history = useNavigate();

    const goBack = () => {
        if (lastRouteMenu.length !== 3) {
            history(lastRouteMenu);
        }
    }
    return (
        <div className="goBackButton" onClick={goBack}>
            <div className='goBackButton__content'></div>
        </div>
    )
}