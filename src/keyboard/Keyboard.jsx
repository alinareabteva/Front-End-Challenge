import React, { Fragment } from "react";
import "./Keyboard.scss"

const KEYS = [
    [
        {
            title: "esc",
            value: "Escape",
            className: "key esc"
        },
        {
            title: "F1",
            value: "F1",
            className: "key",
        },
        {
            title: "F2",
            value: "F2",
            className: "key",
        },
        {
            title: "F3",
            value: "F3",
            className: "key",
        },
        {
            title: "F4",
            value: "F4",
            className: "key",
        },
        {
            title: "F5",
            value: "F5",
            className: "key",
        },
        {
            title: "F6",
            value: "F6",
            className: "key",
        },
        {
            title: "F7",
            value: "F7",
            className: "key",
        },
        {
            title: "F8",
            value: "F8",
            className: "key",
        },
        {
            title: "F9",
            value: "F9",
            className: "key",
        },
        {
            title: "F10",
            value: "F10",
            className: "key",
        },
        {
            title: "F11",
            value: "F11",
            className: "key",
        },
        {
            title: "F12",
            value: "F12",
            className: "key",
        },
        {
            title: "eject",
            value: "eject",
            className: "key eject",
        }
    ],
    [
        {
            title: "~\n`",
            value: "`",
            shiftValue: "~",
            className: "key tilda top-number"
        },
        {
            title: "!\n1",
            value: "1",
            shiftValue: "!",
            className: "key top-number"
        },
        {
            title: "@\n2",
            value: "2",
            shiftValue: "@",
            className: "key top-number"
        },
        {
            title: "#\n3",
            value: "3",
            shiftValue: "#",
            className: "key top-number"
        },
        {
            title: "$\n4",
            value: "4",
            shiftValue: "$",
            className: "key top-number"
        },
        {
            title: "%\n5",
            value: "5",
            shiftValue: "%",
            className: "key top-number"
        },
        {
            title: "^\n6",
            value: "6",
            shiftValue: "^",
            className: "key top-number"
        },
        {
            title: "&\n7",
            value: "7",
            shiftValue: "&",
            className: "key top-number"
        },

        {
            title: "*\n8",
            value: "8",
            shiftValue: "*",
            className: "key top-number"
        },
        {
            title: "(\n9",
            value: "9",
            shiftValue: "(",
            className: "key top-number"
        },
        {
            title: ")\n0",
            value: "0",
            shiftValue: ")",
            className: "key top-number"
        },
        {
            title: "-\n_",
            value: "_",
            shiftValue: "-",
            className: "key top-number"
        },
        {
            title: "+\n=",
            value: "=",
            shiftValue: "+",
            className: "key top-number"
        },
        {
            title: "delete",
            value: "Delete",
            className: "key delete r"
        },
    ],
    [
        {
            title: "tab",
            value: "Tab",
            className: "key tab l"
        },
        {
            title: "Q",
            value: "Q",
            className: "key"
        },
        {
            title: "W",
            value: "W",
            className: "key"
        },
        {
            title: "E",
            value: "E",
            className: "key"
        },
        {
            title: "R",
            value: "R",
            className: "key"
        },
        {
            title: "T",
            value: "T",
            className: "key"
        },
        {
            title: "Y",
            value: "Y",
            className: "key"
        },
        {
            title: "U",
            value: "U",
            className: "key"
        },
        {
            title: "I",
            value: "I",
            className: "key"
        },
        {
            title: "O",
            value: "O",
            className: "key"
        },
        {
            title: "P",
            value: "P",
            className: "key"
        },
        {
            title: "{\n[",
            value: "[",
            shiftValue: "{",
            className: "key top-number"
        },
        {
            title: "}\n]",
            value: "]",
            shiftValue: "}",
            className: "key top-number"
        },
        {
            title: "|\n\\",
            value: "\\",
            shiftValue: "|",
            className: "key top-number backslash"
        },
    ],
    [
        {
            title: "caps lock",
            value: "CapsLock",
            className: "key capslock l"
        },
        {
            title: "A",
            value: "A",
            className: "key"
        },
        {
            title: "S",
            value: "S",
            className: "key"
        },
        {
            title: "D",
            value: "D",
            className: "key"
        },
        {
            title: "F",
            value: "F",
            className: "key"
        },
        {
            title: "G",
            value: "G",
            className: "key"
        },
        {
            title: "H",
            value: "H",
            className: "key"
        },
        {
            title: "J",
            value: "J",
            className: "key"
        },
        {
            title: "K",
            value: "K",
            className: "key"
        },
        {
            title: "L",
            value: "L",
            className: "key"
        },
        {
            title: ":\n;",
            value: ";",
            shiftValue: ":",
            className: "key top-number"
        },
        {
            title: "\"\n'",
            value: "'",
            shiftValue: "\"",
            className: "key top-number"
        },
        {
            title: "return",
            value: "Backspace",
            className: "key return r"
        },
    ],
    [
        {
            title: "shift",
            value: "Shift",
            className: "key shift l"
        },
        {
            title: "Z",
            value: "Z",
            className: "key"
        },
        {
            title: "X",
            value: "X",
            className: "key"
        },
        {
            title: "C",
            value: "C",
            className: "key"
        },
        {
            title: "V",
            value: "V",
            className: "key"
        },
        {
            title: "B",
            value: "B",
            className: "key"
        },
        {
            title: "N",
            value: "N",
            className: "key"
        },
        {
            title: "M",
            value: "M",
            className: "key"
        },
        {
            title: "<\n,",
            value: ",",
            shiftValue: "<",
            className: "key top-number"
        },
        {
            title: ">\n.",
            value: ".",
            shiftValue: ">",
            className: "key top-number"
        },
        {
            title: "?\n/",
            value: "/",
            shiftValue: "?",
            className: "key top-number"
        },
        {
            title: "shift",
            value: "Shift",
            className: "key shift r"
        },
    ],
    [
        {
            title: "fn",
            value: "Fn",
            className: "key l"
        },
        {
            title: "control",
            value: "Control",
            className: "key leftctrl l"
        },
        {
            title: "option",
            value: "Option",
            className: "key l"
        },
        {
            title: "command",
            value: "Command",
            className: "key  command l"
        },
        {
            title: "",
            value: "",
            className: "key space"
        },
        {
            title: "command",
            value: "Command",
            className: "key  command r"
        },
        {
            title: "option",
            value: "Option",
            className: "key r"
        },

    ]
]

const ARROWS = [
    {
        title: "←",
        value: "ArrowLeft",
        className: "key arrow left"
    },
    {
        title: "↑",
        value: "ArrowUp",
        className: "key arrow up"
    },
    {
        title: "↓",
        value: "ArrowDown",
        className: "key arrow down"
    },
    {
        title: "→",
        value: "ArrowRight",
        className: "key arrow right"
    },
]

const ADDITIONAL_BUTTONS = [
    {
        title: "print screen",
        value: "PrintScreen",
        className: "key print"
    },
    {
        title: "scroll lock",
        value: "ScrollLock",
        className: "key scroll"
    },
    {
        title: "pause",
        value: "Pause",
        className: "key pause"
    },
    {
        title: "insert",
        value: "Insert",
        className: "key insert"
    },
    {
        title: "home",
        value: "Home",
        className: "key home"
    },
    {
        title: "page up",
        value: "PageUp",
        className: "key pageup"
    },
    {
        title: "delete",
        value: "Delete",
        className: "key deleteadd"
    },
    {
        title: "end",
        value: "End",
        className: "key end"
    },
    {
        title: "page down",
        value: "PageDown",
        className: "key pagedown"
    },
    {
        title: "num lock",
        value: "NumLock",
        className: "key numlock"
    },
]

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
                            <div key={`${key.value}-${keyIndex}`}
                                onClick={onClick}
                                className={key.className}
                                data-value={key.value}
                                data-shift-value={key.shiftValue}
                            >
                                {key.title}
                            </div>
                        ))
                    }
                </Fragment>
            ))}

            <div className="arrow_container">
                {ARROWS.map((arrow, index) => (
                    <div
                        key={index}
                        className={arrow.className}
                        data-value={arrow.value}
                    >
                        {arrow.title}
                    </div>
                ))}
            </div>

            <div className="additional_buttons">
                {ADDITIONAL_BUTTONS.map((button, index) => (
                    <div
                        key={index}
                        className={button.className}
                        data-value={button.value}
                    >
                        {button.title}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Keyboard;