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

// Create projectile array when click on the screen where we click it
const projectiles = [];
window.addEventListener('click', (event) => {
  const angle = Math.atan2(event.clientY - canvas.width / 2, event.clientX - canvas.width/2);
  const velocity = {
    x: Math.cos(angle),
    y: Math.sin(angle)
  }
  projectiles.push(new Projectile(
   canvas.width / 2,
   canvas.height/ 2,
   5,
   "red",
   velocity
 ))
})

// Animate
function animate(){
  projectiles.forEach(projectile => projectile._update());
  window.requestAnimationFrame(animate);
}

animate();