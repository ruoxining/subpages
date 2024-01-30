document.addEventListener('keydown', moveCharacter);

window.onload = function() {
  var gameArea = document.getElementById('game-area');
  var character = document.getElementById('character');
  var lastKey = '';

  // 设置小人的初始位置为右下角
  posX = gameArea.offsetWidth - character.offsetWidth;
  posY = gameArea.offsetHeight - 3.5*character.offsetHeight;

  character.style.left = posX + 'px';
  character.style.top = posY + 'px';
}

function moveCharacter(event) {
  switch(lastKey) {
    case 'ArrowUp':
    case 'w':
      posY -= 1; 
      character.src = './assets/back.png';
      break;
    case 'ArrowDown':
    case 's':
      posY += 1; 
      character.src = './assets/front.png';
      break;
    case 'ArrowLeft':
    case 'a':
      posX -= 1; 
      character.src = './assets/left.png';
      break;
    case 'ArrowRight':
    case 'd':
      posX += 1; 
      character.src = './assets/right.png';
      break;
  }
  character.style.top = posY + 'px';
  character.style.left = posX + 'px';

  requestAnimationFrame(moveCharacter);
  checkBuildingCollision();

  // 添加移动类
  character.classList.add('moving');

  // 在一段时间后移除移动类
  clearTimeout(moveTimeout);
  moveTimeout = setTimeout(function() {
    character.classList.remove('moving');
  }, 500);
}

document.addEventListener('keydown', function(event) {
  lastKey = event.key;
});

document.addEventListener('keyup', function(event) {
  lastKey = '';
});

requestAnimationFrame(moveCharacter);

var moveTimeout; // 在函数外定义变量

function checkBuildingCollision() {
  // 在这里添加检测人物是否走到建筑物的逻辑
  // 如果是，可以显示提示并处理跳转
}
