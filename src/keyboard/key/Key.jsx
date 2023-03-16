import "./Key.scss";

const Key = ({ title, value, shiftValue, className, location, onMouseDown, onMouseUp }) => {

    return (
        <div
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            className={className}
            data-value={value}
            data-shift-value={shiftValue}
            data-location={location}
        >
            {title}
        </div>
    )
}

export default Key;