 // Get canvas context and get the center
 const canvas = document.querySelector('canvas');
 const ctx = canvas.getContext('2d');
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
 const x = canvas.width/2;
 const y = canvas.height/2;

// Instance new player
const player = new Player(x, y, 30, 'blue');

// Create projectile array when click on the screen where we click it (get angle of the cursor)
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

// Create enemies and spawn them towards player
const enemies = [];
function spawnEenemies(){
  setInterval(() => {
  // Where they go
  let x;
  let y;
  const radius = Math.random() * (30 - 4) + 4;
  if (Math.random() < 0.5){
    x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
    y = Math.random() * canvas.height;
  } else {
    x = Math.random() * canvas.width;
    y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius;
  }
  const angle = Math.atan2(canvas.width / 2 - y, canvas.width/2 - x);
  const color = "green";
  const velocity = {
    x: Math.cos(angle),
    y: Math.sin(angle)}
  enemies.push(new Enemy(
   x,
   y,
   radius,
   color,
   velocity
 ))
  }, 1000);
}

spawnEenemies();

// Clean the screen
function _clean(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Animate
function animate(){
  _clean();
  player._draw();
  projectiles.forEach(projectile => projectile._update());
  enemies.forEach(enemy => enemy._update());
  window.requestAnimationFrame(animate);
}

animate();