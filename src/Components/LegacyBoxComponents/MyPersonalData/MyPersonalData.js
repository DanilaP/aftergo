import { CheckSettings } from './components/CheckSettings';
import { Input } from './components/Input';
import { Message } from './components/Message';
import { BlueCustomBtn } from '../OrderNewLand/components/blue-custom-btn';
import { MyPersonalDefault } from './constants';
import './MyPersonalData.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GoBackButton } from '../OrderNewLand/components/go-back-button';

export default function MyPersonalData() {

    const [isValidForm, setIsValidForm] = useState(false);
    const dispatch = useDispatch();
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
    useEffect(() => {
        dispatch({ type: "LASTROUTEMENU", payload: '/LegacyBoxSettingFULL' });
    }, [])
    return (
        <div className='myPersonalData'>
            <GoBackButton />
            <div className='myPersonalData__content'>
                <div className='myPersonalData__content__header'>
                    Your personal data
                    <div className='myPersonalData__content__header-subHeader'>
                        Enter your personal details to register your account and make a purchase
                    </div>
                </div>
                <div className='myPersonalData__content__form'>
                    <div className='myPersonalData__content__groupInputs'>
                        <Input placeholder="First name" name="Name" type="text" onChange={formChange} />
                        <Input placeholder="Date" name="Date" type="date" onChange={formChange} />
                        <Message text="Your account will be automatically registered after purchase. An email will be sent with your username and password" />
                    </div>
                    <div className='myPersonalData__content__groupInputs'>
                        <Input placeholder="Last name" name="Lastname" type="text" onChange={formChange} />
                        <Input placeholder="Email" name="Email" type="text" onChange={formChange} />
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