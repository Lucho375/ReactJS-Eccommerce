import "./Button.css"
const Button = ({ text, onClick, disabled}) => {
    return (
        <button onClick={onClick} className={disabled ? "button--disabled" : "button"} disabled={disabled}>{text}</button>
    )
}

export default Button;