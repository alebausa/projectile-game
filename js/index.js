 // Get canvas context
 const canvas = document.querySelector('canvas');
 const ctx = canvas.getContext('2d');
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
 const x = canvas.width/2;
 const y = canvas.height/2;

// Instance new player
const player = new Player(x, y, 30, 'blue');
player._draw();

// Create projectile when click on the screen
window.addEventListener('click', () => {
  console.log("Click")
})

console.log(ctx);