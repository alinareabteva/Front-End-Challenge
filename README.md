## Requirements

1. Use HTML and CSS to render a keyboard layout UI. Any framework can be used
(React, Svelte, Vue, etc.) - For example

1. Change the color of the pressed key (physically or virtually) to indicate three different states:
a. Default: Gray
b. Pressed (keydown): Blue
c. Released (keyup): Green

1. Extend the functionality from step 2. The pressed state should remain active for
3 seconds, then fallback to the Released state.

1. Implement a countdown timer. After 60 seconds, all pressed keys should be
reset to their default state.

1. Add a repeat button that, when clicked, will simulate the pressing of all keys that
were previously pressed with a delay of 200ms between each press. Skipping
the pressed State

## Available Scripts

In the project directory, you can run:

### `npm start`