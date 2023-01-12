const SliderSelect = ({onClick, className, fill}) => {
    return (
        <svg height="20" width="20">
            <circle cx="10" cy="10" r="5" stroke="black" fill={fill} strokeWidth="1" onClick={onClick} className={className}/>
        </svg>
    )
}

export default SliderSelect;