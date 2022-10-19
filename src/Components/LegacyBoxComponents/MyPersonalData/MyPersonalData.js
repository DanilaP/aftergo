import { CheckSettings } from './components/CheckSettings';
import { Input } from './components/Input';
import { Message } from './components/Message';
import { BlueCustomBtn } from '../OrderNewLand/components/blue-custom-btn';
import { MyPersonalDefault } from './constants';
import './MyPersonalData.scss';
import { useState } from 'react';

export default function MyPersonalData() {

    const [isValidForm, setIsValidForm] = useState(false);
    const [data, setData] = useState(MyPersonalDefault);

    const formChange = (e) => {
        const newData = {...data, [e.name]: { name: e.name, value: e.value, error: e.value.length === 0 }};
        setData(newData);
        setIsValidForm(true);
        Object.keys(newData).map(el => {
            if (newData[el].error) {
                setIsValidForm(false);
            }
        })
    }
    return (
        <div className='myPersonalData'>
            <div className='myPersonalData__content'>
                <div className='myPersonalData__content__header'>
                    Your personal data
                    <div className='myPersonalData__content__header-subHeader'>
                        Enter your personal details to register your account and make a purchase
                    </div>
                </div>
                <div className='myPersonalData__content__form'>
                    <div className='myPersonalData__content__groupInputs'>
                        <Input placeholder="Name" name="Name" onChange={formChange} />
                        <Input placeholder="Lastname" name="Lastname" onChange={formChange} />
                        <Message text="Your account will be automatically registered after purchase. An email will be sent with your username and password" />
                    </div>
                    <div className='myPersonalData__content__groupInputs'>
                        <Input placeholder="Date" name="Date" onChange={formChange} />
                        <Input placeholder="Description" name="Description" onChange={formChange} />
                        <CheckSettings />
                    </div>
                </div>
                <div className='myPersonalData__action'>
                    <BlueCustomBtn text="Continue" onClick={() => console.log()} disabled={!isValidForm} />
                </div>
            </div>
        </div>
    )
}