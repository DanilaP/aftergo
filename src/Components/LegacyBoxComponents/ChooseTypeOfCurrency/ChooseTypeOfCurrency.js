import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Stepper } from '../LegacyBoxSettingFull/components/stepper';
import { GoBackButton } from '../OrderNewLand/components/go-back-button';
import './ChooseTypeOfCurrency.scss';

export default function ChooseTypeOfCurrency() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: "LASTROUTEMENU", payload: '/LegacyBoxSettingFULL' });
    }, [])

    return (
        <div className='chooseTypeOfCurrency'>
            <GoBackButton />
            <Stepper allStep={3} currentStep={3} />
            <div className='chooseTypeOfCurrency__content'>
                <div className='chooseTypeOfCurrency__content-header'>
                    choose the type of payment
                </div>
                <div className='chooseTypeOfCurrency__content-block'>
                    FiAT
                    <span className='chooseTypeOfCurrency__content-subTitle'>credit or debit cards</span>
                </div>
                <div className='chooseTypeOfCurrency__content-block'>
                    Crypto
                    <span className='chooseTypeOfCurrency__content-subTitle'>buy in 2 clicks</span>
                </div>
                <button>Select</button>
            </div>
        </div>
    )
}