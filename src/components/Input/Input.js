import "./Input.scss";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

const Input = ({children, onChange, name, type, value, placeholder, errorMessage, required}) => {


    return (
        <label className="contact__form__label">
            <span>{children}</span>
            <input 
            type={type} 
            name={name} 
            onChange={onChange} 
            value={value} 
            className="contact__form__input"
            placeholder={placeholder}/>
            {errorMessage && <ErrorOutlineOutlinedIcon className="contact__form__input--invalid"/>}
        </label>
    )
}
export default Input;