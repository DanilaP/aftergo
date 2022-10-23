import { useRef, useState } from 'react';
import './index.scss';

export const Input = ({
    placeholder,
    onChange,
    name,
    type
}) => {
    const ref = useRef();
    const [touched, setTouched] = useState(false);
    return (
        <div className={ref.current?.value.length === 0 && touched ? 'input__error' : ''} onClick={() => setTouched(true)} >
            <input type={type} ref={ref} name={name} className="input" placeholder={placeholder} onChange={() => onChange(ref.current)} />
        </div>
    )
}