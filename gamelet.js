/*

Gamelet: a starting point for writing games
Author: Bennet Aboagye-Asare | Chris Minnick
Version: 1.0
Instructions:
Include gamelet.js in an HTML document containing
an element with an id of 'ball'.
The script will detect when the up or down arrow key
is pressed and will move the ball element accordingly.

*/

const ball = document.getElementById('ball'); // get the ball
document.addEventListener('keydown', handleKeyPress); // listen for keys
let position = 0; // set initial position

/*
handleKeyPress
responds to certain key presses by updating position.
*/
function handleKeyPress(e) {
    if (e.code === 'ArrowUp') {
        position = position - 50;
    }
    if (e.code == 'ArrowDown') {
        position = position + 50;
    }
    if (position < 0) {
        position = 0;
    }
    refresh(); // repositioin the ball
}

/*
refresh
changes the position of the ball
*/
function refresh() {
    ball.style.top = position + 'px';
}
