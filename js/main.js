let gameOver = false;

document.addEventListener('DOMContentLoaded', () => {
  const keys = document.querySelectorAll('keyboard-row button');

  for (i = 0; i < keys.length; i++) {
    keys[i].onClick = ({ target }) => {
      const key = target.getAttribute('data-key');

      console.log(key);
    };
  }
  const renderGameBoard = () => {
    const gameBoard = document.getElementById('board');

    for (i = 0; i < 30; i++) {
      let square = document.createElement('div');
      square.classList.add('square');
      square.setAttribute('id', i);
      gameBoard.appendChild(square);
    }
  };

  renderGameBoard();

  //   document.addEventListener('keyup', (e) => {
  //     if (gameOver) return;

  //     if ('KeyA' <= e.code && e.code <= 'KeyZ') {
  //     }
  //   });
});
