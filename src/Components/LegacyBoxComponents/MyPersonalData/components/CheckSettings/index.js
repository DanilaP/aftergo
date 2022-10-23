import { useState } from 'react';
import Checkbox from '../../../../../Icons/checkbox.png';

import './index.scss';

export const CheckSettings = () => {

    const [policy, setPolicy] = useState(false);
    const [informed, setInformed] = useState(false);


    const onChecked = (e) => {
        if (e.target.name === 'policy') {
            setPolicy(!policy);
            return;
        };
        if (e.target.name === 'informed') {
            setInformed(!informed);
            return;
        }
    }
    return (
        <div className='checkSettings'>
            <div className='checkSettings__checkboxes'>
                <div className='checkbox__block'>
                    <button onClick={(e) => onChecked(e)} className='checkbox' name='policy'>
                        {policy && <img src={Checkbox} width="20px" height="20px" name='policy'/>}
                    </button>
                </div>
                <div className='checkbox__block'>
                    <button onClick={(e) => onChecked(e)} className='checkbox' name='informed'>
                        {informed && <img src={Checkbox} width="20px" height="20px" name='informed'/>}
                    </button>
                </div>
            </div>
            <div className='checkSettings__values'>
                <span>I agree to Privacy Legacy & Terms and Conditions  </span>
                <span>
                    I want to be informed about updates in the project. <br />
                    It is important not to miss the launch of the project
                </span>
            </div>
        </div>
    )
}