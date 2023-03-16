import React, { Fragment } from "react";
import { KEYS, ARROWS, ADDITIONAL_BUTTONS } from "./keys";
import Key from "./key/Key";
import "./Keyboard.scss"

const Keyboard = () => {
    const onClick = (e) => {
        console.log(e.target.dataset.shiftValue, e.target.dataset.value)
    }

    return (
        <div className="keyboard-layout">
            {KEYS.map((keyRow, rowIndex) => (
                <Fragment key={rowIndex}>
                    {
                        keyRow.map((key, keyIndex) => (
                            <Key key={`${key.value}-${keyIndex}`}
                                onClick={onClick}
                                {...key}
                            />
                        ))
                    }
                </Fragment>
            ))}

            <div className="arrow_container">
                {ARROWS.map((arrow, index) => (
                    <Key
                        key={index}
                        onClick={onClick}
                        {...arrow}
                    />
                ))}
            </div>

            <div className="additional_buttons">
                {ADDITIONAL_BUTTONS.map((button, index) => (
                    <Key
                        key={index}
                        onClick={onClick}
                        {...button}
                    />
                ))}
            </div>
        </div>
    )
}

export default Keyboard;