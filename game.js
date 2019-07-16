var hero = {};
var missiles = [];
var x = 0;
var y = 0;
var score = 0;
var enemies = [];
var end = document.getElementById('gameover');
var win = document.getElementById('win');

function init() {

  hero = {
    left: window.innerWidth  * 0.485 ,
    top: window.innerHeight * 0.75
  };

  missiles = [];

  x = (window.innerWidth - 700) / 2 - 225;
  y = (window.innerHeight -75) / 15 -50;

  score = 0;

  enemies = [
    { left: 200+x, top: 150+y, type:1 },
    { left: 300+x, top: 150+y, type:1 },
    { left: 400+x, top: 150+y, type:1 },
    { left: 500+x, top: 150+y, type:1 },
    { left: 600+x, top: 150+y, type:1 },
    { left: 700+x, top: 150+y, type:1 },
    { left: 800+x, top: 150+y, type:1 },
    { left: 900+x, top: 150+y, type:1 },
    { left: 200+x, top: 225+y, type:2 },
    { left: 300+x, top: 225+y, type:2 },
    { left: 400+x, top: 225+y, type:2 },
    { left: 500+x, top: 225+y, type:2 },
    { left: 600+x, top: 225+y, type:2 },
    { left: 700+x, top: 225+y, type:2 },
    { left: 800+x, top: 225+y, type:2 },
    { left: 900+x, top: 225+y, type:2 }
  ];

  document.onkeydown = function(event) {
    if (event.keyCode === 37) {
      // Left
      hero.left = hero.left - 5;
    }
    if (event.keyCode === 39) {
      // Right
      hero.left = hero.left + 5;
    }
    if (event.keyCode === 32) {
      // Spacebar (fire)
      missiles.push({
        left: hero.left + 28,
        top: hero.top - 133
      });
    }
  }
}

function start() {
  gameLoop();
}

function drawHero() {
  document.getElementById('hero').style = 'display: block';
  document.getElementById('hero').style.left = hero.left + 'px';
  document.getElementById('hero').style.top = hero.top + 'px';
}

function drawMissiles() {
  document.getElementById('missiles').innerHTML = "";
  for (var i = 0 ; i < missiles.length ; i++) {
    document.getElementById('missiles').innerHTML += `<img src="assets/missile1.png" class='missile1' style='left:${missiles[i].left}px; top:${missiles[i].top}px'>`;
  }
}

function moveMissiles() {
  for(var i = 0 ; i < missiles.length ; i++ ) {
    missiles[i].top = missiles[i].top - 4
  }
}

function drawEnemies() {
  document.getElementById('enemies').innerHTML = ""
  for(var i = 0 ; i < enemies.length ; i++ ) {
    document.getElementById('enemies').innerHTML += `<img src="assets/invader.png" class='enemy' style='left:${enemies[i].left}px; top:${enemies[i].top}px'>`;
  }
}

function moveEnemies() {
  for(var i = 0 ; i < enemies.length ; i++ ) {
    enemies[i].top = enemies[i].top + 0.7;
  }
}

function collisionDetection() {
  if (enemies.length > 0) {
    for (var enemy = 0; enemy < enemies.length; enemy++) {
      for (var missile = 0; missile < missiles.length; missile++) {
        if (
          missiles[missile].left >= enemies[enemy].left  &&
          missiles[missile].left <= (enemies[enemy].left + 60)  &&
          missiles[missile].top <= enemies[enemy].top -65 &&
          missiles[missile].top >= (enemies[enemy].top -115)
        ) {
          enemies.splice(enemy, 1);
          missiles.splice(missile, 1);
          if (enemy.type = 1) {score += 10}
          else {if (enemy.type = 2) {score += 20}
          else {score += 30}};
        }
      }
    }
  }
}

function scoreupdate() {
  const a = document.getElementById('score');
  b = score;
  a.textContent = 'SCORE: ' + `${b}`;
}

function gameLoop() {
  if (enemies.length == 0) {
    clearTimeout(gamevar);
    //const win = document.getElementById('win');
    win.textContent = 'YOU WON!';
    const img = document.querySelector('.enemy');
    img.parentNode.removeChild(img);
    for (var u = 0 ; u < missiles.length ; u++ ) {
      const img2 = document.querySelector('.missile1');
      img2.parentNode.removeChild(img2);
    }
    document.getElementById('hero').style = 'display: none';
  }
  else {
    if (enemies[enemies.length-1].top > hero.top-50) {
      clearTimeout(gamevar);
      end.textContent = 'GAME OVER';
      for (var t = 0 ; t < enemies.length ; t++ ) {
        const img = document.querySelector('.enemy');
        img.parentNode.removeChild(img);
      }
      for (var u = 0 ; u < missiles.length ; u++ ) {
        const img2 = document.querySelector('.missile1');
        img2.parentNode.removeChild(img2);
      }
      document.getElementById('hero').style = 'display: none';
    }
    else {
      var gamevar = setTimeout(gameLoop, 33);
      moveMissiles();
      drawMissiles();
      moveEnemies();
      drawEnemies();
      collisionDetection();
      drawHero();
      drawMissiles();
      scoreupdate();

      const hamburger2 = document.querySelector('.hamburger');
      hamburger2.onclick = function actionClicked_exit(event) {
        clearTimeout(gamevar);
        if (enemies.length > 0) {
          for (var t = 0 ; t < enemies.length ; t++ ) {
            const img = document.querySelector('.enemy');
            if (img != null) {img.parentNode.removeChild(img)}
          }
        }
        if (missiles.length > 0) {
          for (var u = 0 ; u < missiles.length ; u++ ) {
            const img2 = document.querySelector('.missile1');
            if (img != null) {img2.parentNode.removeChild(img2)}
          }
        }
        document.getElementById('hero').style = 'display: none';
        var exit = document.getElementById('exit');
        exit.textContent = 'GAME EXITED';
      }
    }
  }
}
