import './index.scss';

export const CheckSettings = () => {
    return (
        <div className='checkSettings'>
            <div className='checkSettings__checkboxes'>
                <input type="checkbox" />
                <input type="checkbox" />
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