function playSound(soundId) {
    const audio = new Audio(`./sonidos/${soundId}.mp3`);
    const button = document.getElementById(soundId);
    
    button.style.backgroundColor = 'tomato';    
    audio.play();
    audio.onended = function() {
        button.style.backgroundColor = ''; 
    };
}

// Function to handle key presses
function handleKeyPress(event) {
    switch (event.key) {
        case '1':
            playSound("piano1");
            break;
        case '2':
            playSound("piano2");
            break;
        case '3':
            playSound("piano3");
            break;
        case 'q':
            playSound("piano4");
            break;
        case 'w':
            playSound("piano5");
            break;
        case 'e':
            playSound("piano6");
            break;
        case 'a':
            playSound("piano7");
            break;
        case 's':
            playSound("piano9");
            break;
        case 'd':
            playSound("look");
            break;
        case 'z':
            playSound("drums");
            break;
        case 'x':
            playSound("baseypiano");
            break;
        default:
            // Do nothing if key does not match any expected case
            return;
    }
}

// Event listener for keydown event on the whole document
document.addEventListener('keydown', handleKeyPress);
