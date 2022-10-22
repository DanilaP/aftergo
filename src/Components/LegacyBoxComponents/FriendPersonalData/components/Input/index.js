import { useRef, useState } from 'react';
import './index.scss';

export const Input = ({
    placeholder,
    onChange,
    name,
}) => {
    const ref = useRef();
    const [touched, setTouched] = useState(false);
    return (
        <div className={ref.current?.value.length === 0 && touched ? 'input__error' : ''} onClick={() => setTouched(true)} >
            <input ref={ref} name={name} className="input" placeholder={placeholder} onChange={() => onChange(ref.current)} />
        </div>
    )
}