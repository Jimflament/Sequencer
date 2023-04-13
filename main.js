import noteBlocks from './src/components/noteBlocks';
// import JSConfetti from 'js-confetti';

const app = document.querySelector('#app');
const startBtn = document.querySelector('#start');

app.innerHTML = `
  <div class="container">
    <div class="lane" id="lane1"></div>
    <div class="lane" id="lane2"></div>
    <div class="lane" id="lane3"></div>
    <div class="lane" id="lane4"></div>
    <div class="lane" id="lane5"></div>
  </div>
`;

startBtn.addEventListener('click', () => {
  noteBlocks();
});

// noteBlocks();
