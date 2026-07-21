const coin = document.getElementById('coin');
const tossBtn = document.getElementById('toss-btn');
const resultText = document.getElementById('result');

function getRandomSide() {
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

function tossCoin() {
  tossBtn.disabled = true;
  resultText.textContent = '';
  coin.classList.add('flipping');

  // Decide result
  const result = getRandomSide();

  // After animation (1.5s), show result and set coin side
  setTimeout(() => {
    coin.classList.remove('flipping');
    if (result === 'heads') {
      coin.style.transform = 'rotateY(0deg)';
      resultText.textContent = "It's Heads! 🥇";
    } else {
      coin.style.transform = 'rotateY(180deg)';
      resultText.textContent = "It's Tails! 🎯";
    }
    tossBtn.disabled = false;
  }, 1500);
}

tossBtn.addEventListener('click', tossCoin);

// Also enable clicking on coin to toss
coin.addEventListener('click', tossCoin);
// Redirect to RPS script
document.getElementById('go-to-rps').addEventListener('click', () => {
      window.location.href = 'rps.html';
    });


