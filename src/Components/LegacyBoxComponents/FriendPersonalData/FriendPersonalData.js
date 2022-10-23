import { CheckSettings } from './components/CheckSettings';
import { Input } from './components/Input';
import { Message } from './components/Message';
import { BlueCustomBtn } from '../OrderNewLand/components/blue-custom-btn';
import { MyPersonalDefault } from './constants';
import './FriendPersonalData.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GoBackButton } from '../OrderNewLand/components/go-back-button';
import { TextArea } from './components/textarea';

export default function FriendPersonalData() {

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
        <div className='friendPersonalData'>
            <GoBackButton />
            <div className='friendPersonalData__content'>
                <div className='friendPersonalData__content__header'>
                    Friend personal data
                    <div className='friendPersonalData__content__header-subHeader'>
                    Enter personal friend details to enable him to create an account. We will send him a unique link by email
                    </div>
                </div>
                <div className='friendPersonalData__content__form'>
                    <div className='friendPersonalData__content__groupInputs'>
                        <Input placeholder="Name" name="Name" onChange={formChange} />
                        <Input placeholder="ConfirmEmail" name="ConfirmEmail" onChange={formChange} />
                        <Input placeholder="Email" name="Email" onChange={formChange} />
                        <Message text="This account will be automatically registered after purchase. An email will be sent with relevant username and password." />
                    </div>
                    <div className='friendPersonalData__content__groupInputs-textarea'>
                        <Input placeholder="Lastname" name="Lastname" onChange={formChange} />
                        <TextArea placeholder="Description" name="Description" onChange={formChange} />
                        <CheckSettings />
                    </div>
                </div>
                <div className='friendPersonalData__action'>
                    <BlueCustomBtn text="Continue" onClick={() => console.log()} disabled={!isValidForm} />
                </div>
            </div>
        </div>
    )
}