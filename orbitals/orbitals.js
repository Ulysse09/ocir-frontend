
export function initOrbitals() {
  const gameArea = document.querySelector('.js-game-area');
  let numBalls = 0;
  const colors = ['#ff7043', '#69f0ae', '#40c4ff', '#7c4dff', '#f44336', '#90a4ae'];

  // Function to create a new ball
  function createDot() {
    numBalls++;

    const randomX = Math.floor(Math.random() * 100) + 1;
    const randomY = Math.floor(Math.random() * 100) + 1;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Create a new div for the ball
    const ball = document.createElement('div');
    ball.classList.add('ball', 'js-ball');
    ball.id = `ball${numBalls}`;
    ball.style.left = `calc(${randomX}% - 50px)`;
    ball.style.top = `calc(${randomY}% - 50px)`;
    ball.style.backgroundColor = randomColor;

    // Add click listener to hide the ball
    ball.addEventListener('click', () => {
      ball.style.display = 'none';
    });

    // Append the ball to the game area
    gameArea.appendChild(ball);

    // Repeat until 100 balls
    if (numBalls < 100) {
      setTimeout(createDot, 300);
    }

    // console.log(numBalls);
  }

  // Start generating balls
  createDot();


}

