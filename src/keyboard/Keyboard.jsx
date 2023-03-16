import React, { Fragment, useEffect } from "react";
import { KEYS, ARROWS, ADDITIONAL_BUTTONS, setColorToKeyboard } from "./utils";
import Key from "./key/Key";
import "./Keyboard.scss";

export const CLASSES = {
    PRESSED: "pressed",
    RELEASED: "released"
}

const Keyboard = () => {

    const onMouseDown = (e) => {
        e.preventDefault();
        const dataset = e?.target?.dataset
        setColorToKeyboard({
            key: dataset.value,
            className: CLASSES.PRESSED,
            location: dataset.location
        });
    }

    const onMouseUp = (e) => {
        e.preventDefault();
        const dataset = e?.target?.dataset
        setColorToKeyboard({
            key: dataset.value,
            className: CLASSES.RELEASED,
            location: dataset.location
        });
    }

    useEffect(() => {
        const onKeyDown = (keyEvent) => {
            keyEvent.preventDefault();
            setColorToKeyboard({
                key: keyEvent.key,
                className: CLASSES.PRESSED,
                location: keyEvent.location,
                keyEvent
            });
        }

        const onKeyUp = (keyEvent) => {
            keyEvent.preventDefault();
            setColorToKeyboard({
                key: keyEvent.key,
                className: CLASSES.RELEASED,
                location: keyEvent.location,
                keyEvent
            });
        }

        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('keyup', onKeyUp);

        }
    }, [])

    return (
        <div className="keyboard-layout">
            {KEYS.map((keyRow, rowIndex) => (
                <Fragment key={rowIndex}>
                    {
                        keyRow.map((key, keyIndex) => (
                            <Key key={`${key.value}-${keyIndex}`}
                                onMouseDown={onMouseDown}
                                onMouseUp={onMouseUp}
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
                        onMouseDown={onMouseDown}
                        onMouseUp={onMouseUp}
                        {...arrow}
                    />
                ))}
            </div>

            <div className="additional_buttons">
                {ADDITIONAL_BUTTONS.map((button, index) => (
                    <Key
                        key={index}
                        onMouseDown={onMouseDown}
                        onMouseUp={onMouseUp}
                        {...button}
                    />
                ))}
            </div>
        </div>
    )
}

export default Keyboard;