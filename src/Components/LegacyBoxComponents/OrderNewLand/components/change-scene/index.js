import { useEffect } from 'react';
import './index.scss';
export const ChangeScene = ({scenes, onChooseScene}) => {

    useEffect(() => {
        onChooseScene(scenes[0]);
    }, [])
    return (
        <div className='changeScenes'>
            {
                scenes.map((el, index) => (
                    <div className='changeScenes__eachScene' onClick={() => onChooseScene(scenes[index])}>
                        <img src={scenes[index].image} width="100%" height="100%" />
                    </div>
                ))
            }
        </div>
    )
}