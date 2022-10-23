import { useRef, useState } from 'react';
import './index.scss';

export const TextArea = ({
    placeholder,
    onChange,
    name
}) => {
    const ref = useRef();
    const [touched, setTouched] = useState(false);
    return (
        <div className={ref.current?.value.length === 0 && touched ? 'textarea__error' : ''} onClick={() => setTouched(true)} >
            <textarea ref={ref} name={name} className="textarea" placeholder={placeholder} onChange={() => onChange(ref.current)} />
        </div>
    )
}