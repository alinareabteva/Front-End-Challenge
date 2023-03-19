import React, { Fragment, useEffect, useState } from "react";
import { KEYS, ARROWS, ADDITIONAL_BUTTONS, setColorToKeyboard, CLASSES } from "./utils";
import Key from "./key/Key";
import "./Keyboard.scss";

const COLOR_CHANGE_TIME = 3000;
const INTERVAL_TIME = 60 * 1000;

const Keyboard = ({ addKey }) => {
    const [keysTimeoutMap, setKeysTimeoutMap] = useState({})

    const delayTaskForKey = (key, func, time = COLOR_CHANGE_TIME) => {
        const keyToUse = key.toLowerCase()
        if (keysTimeoutMap[keyToUse]) {
            clearTimeout(keysTimeoutMap[keyToUse])
        }

        const timeoutID = setTimeout(func, time);
        setKeysTimeoutMap(prevState => ({
            ...prevState,
            [keyToUse]: timeoutID
        }));
    }

    const onMouseDown = (e) => {
        e.preventDefault();
        const { value: key, location } = e?.target?.dataset
        setColorToKeyboard({
            key,
            className: CLASSES.PRESSED,
            location
        });
        addKey({
            key,
            location
        })
    }

    const onMouseUp = (e) => {
        e.preventDefault();
        const dataset = e?.target?.dataset
        delayTaskForKey(dataset.value, () => {
            setColorToKeyboard({
                key: dataset.value,
                className: CLASSES.RELEASED,
                location: dataset.location
            });
        })
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setKeysTimeoutMap(prevState => {
                Object.values(prevState).forEach(clearTimeout)
                return {}
            })
            document.querySelectorAll(".key").forEach(key => {
                key.classList.remove(CLASSES.PRESSED)
                key.classList.remove(CLASSES.RELEASED)
            })
        }, INTERVAL_TIME)
        return () => {
            clearInterval(timer);
        }
    }, [])

    useEffect(() => {
        const onKeyDown = (keyEvent) => {
            keyEvent.preventDefault();
            setColorToKeyboard({
                key: keyEvent.key,
                className: CLASSES.PRESSED,
                location: keyEvent.location,
                shiftEnabled: keyEvent.shiftKey,
                capsLockEnabled: keyEvent.getModifierState("CapsLock")
            });
            addKey({
                key: keyEvent.key,
                location: keyEvent.location
            })
        }
        const onKeyUp = (keyEvent) => {
            keyEvent.preventDefault();
            delayTaskForKey(keyEvent.key, () => {
                setColorToKeyboard({
                    key: keyEvent.key,
                    className: CLASSES.RELEASED,
                    location: keyEvent.location,
                    shiftEnabled: keyEvent.shiftKey,
                    capsLockEnabled: keyEvent.getModifierState("CapsLock")
                });
            })
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