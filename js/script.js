var i = 0; 
var textEffect = "Hello! I am Shobande James";    
var container = document.getElementById('myName');

function animate() {
    if (i < textEffect.length) {
    container.innerHTML+= textEffect.charAt(i); 
    i++; 
    setTimeout (animate, 100); 
    }
}

animate();