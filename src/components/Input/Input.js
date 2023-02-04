import "./Input.scss";

const Input = ({children, onChange, name, type, value, placeholder, errorMessage}) => {
    
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
            {errorMessage && <span>Caracteres invalidos</span>}
        </label>
    )
}
export default Input;