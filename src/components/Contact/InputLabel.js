const InputLabel = ({children, onChange, name, type, value, placeholder}) => {
    return (
        <label className="contact__form__label">
            <span>{children}</span>
            <input type={type} name={name} onChange={onChange} value={value} className="contact__form__input" placeholder={placeholder}/>
        </label>
    )
}
export default InputLabel;