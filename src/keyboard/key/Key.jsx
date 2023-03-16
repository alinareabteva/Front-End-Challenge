import "./Key.scss";

const Key = ({title, value, shiftValue, className, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={className}
            data-value={value}
            data-shift-value={shiftValue}
        >
            {title}
        </div>
    )
}

export default Key;