import './index.scss';

export const CheckSettings = () => {
    return (
        <div className='checkSettings'>
            <div className='checkSettings__checkboxes'>
                <input type="checkbox" />
            </div>
            <div className='checkSettings__values'>
                <span>I agree to Privacy Legacy & Terms and Conditions  </span>
            </div>
        </div>
    )
}