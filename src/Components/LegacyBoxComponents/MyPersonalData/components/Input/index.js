import { useRef } from 'react';
import { useEffect } from 'react';
import './index.scss';

export const Input = ({
    placeholder,
    onChange,
    name
}) => {
    const ref = useRef();

    return (
        <input ref={ref} name={name} className="input" placeholder={placeholder} onChange={() => onChange(ref.current)} />
    )
}