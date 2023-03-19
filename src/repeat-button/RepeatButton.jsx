import "./RepeatButton.scss";

const RepeatButton = ({ onClickRepeat, disabled }) => {
    return (
        <div className="repeat-btn-wrapper">
        <button
            className="repeat"
            onClick={onClickRepeat}
            disabled={disabled}
        >
            Repeat
        </button>
        </div>
    )
}

export default RepeatButton;