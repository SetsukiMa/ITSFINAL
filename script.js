document.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
        event.preventDefault(); // Stops zooming with Ctrl + Mouse Wheel
    }
}, { passive: false });

//this mf iz for the plus and minus
document.addEventListener('keydown', function(event) {
if (event.ctrlKey && (event.key === '=' || event.key === '-' || event.key === '0')) {
    event.preventDefault(); 
}
});

//for mobile
document.addEventListener('touchmove', function(event) {
if (event.scale !== undefined && event.scale !== 1) {
    event.preventDefault(); 
}
}, { passive: false });

let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
let now = (new Date()).getTime();
if (now - lastTouchEnd <= 300) {
    event.preventDefault(); 
}
lastTouchEnd = now;
}, false);