import { useState } from "react";
import Keyboard from "./keyboard/Keyboard";
import RepeatButton from "./repeat-button/RepeatButton";
import { CLASSES, setColorToKeyboard } from "./keyboard/utils";

function App() {
  const [pressedKeys, setPressedKeys] = useState([]);
  const [repeatButtonDisabled, setRepeatButtonDisabled] = useState(false);

  const addKey = (key) => {
    setPressedKeys(prevState => [...prevState, key])
  }

  const onClickRepeat = () => {
    setRepeatButtonDisabled(true)
    let intervalID = setInterval(() => {
      setPressedKeys(([key, ...restKeys]) => {
        setColorToKeyboard({
          ...key,
          className: CLASSES.RELEASED
        })
        if (restKeys.length === 0) {
          clearInterval(intervalID)
          setRepeatButtonDisabled(false)
        }
        return restKeys
      })
    }, 200)
  }


  return (
    <div className="app">
      <div className="content">
        <Keyboard addKey={addKey} />
        <RepeatButton onClickRepeat={onClickRepeat} disabled={repeatButtonDisabled || pressedKeys.length === 0} />
      </div>
    </div>
  );
}

export default App;
