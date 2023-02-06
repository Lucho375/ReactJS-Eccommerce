import "./Button.scss"
const Button = ({ children, onClick, disabled}) => {
    return (
        <button onClick={onClick} className={disabled ? "button--disabled" : "button"} disabled={disabled}>{children}</button>
    )
}

export default Button;