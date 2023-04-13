import noteBlocks from './src/components/noteBlocks';
// import testComp from './src/components/test';
// import background from './src/components/background';

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="container">
    <div class="lane" id="lane1"></div>
    <div class="lane" id="lane2"></div>
    <div class="lane" id="lane3"></div>
    <div class="lane" id="lane4"></div>
    <div class="lane" id="lane5"></div>
  </div>
`;

// startBtn.addEventListener('click', () => {
//   noteBlocks();
// });
// testComp();
noteBlocks();
// background();
