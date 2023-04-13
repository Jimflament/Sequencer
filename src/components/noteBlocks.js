import * as Tone from 'tone';

const noteBlocks = () => {
  const pingSound = new Audio('/sounds/error.mp3');
  const bodyEl = document.querySelector('body');
  const jsConfetti = new JSConfetti();

  fetch('https://api-hitloop.responsible-it.nl/test_json?seed=120')
    .then((response) => response.json())
    .then((data) => fetchedData(data))
    .catch((error) => console.log(error));

  // NOTES
  const fetchedData = (data) => {
    const notes = data.tracks[0].notes;
    const noteNames = notes.map((note) => note.name);
    const noteTime = notes.map((note) => note.time);
    const noteDuration = notes.map((note) => note.duration);

    // CODE JESSE
    function getRandomLane() {
      return Math.floor(Math.random() * 5) + 1;
    }

    function getRandomColor() {
      const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    const spawnBlock = () => {
      const block = document.createElement('div');
      block.classList.add('block', getRandomColor());
      const lane = document.getElementById('lane' + getRandomLane());
      lane.appendChild(block);
      block.addEventListener('click', () => {
        const randomNumber = Math.floor(Math.random() * 10);

        const synth = new Tone.FMSynth().toDestination();

        synth.triggerAttackRelease(
          noteNames[randomNumber],
          noteTime[randomNumber],
        );

        console.log(noteDuration[randomNumber]);

        bodyEl.style.animationDuration = `${noteDuration[randomNumber * 3]}s`;

        jsConfetti.addConfetti({
          emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
          confettiNumber: 10,
        });

        block.remove();
      });
      setTimeout(() => {
        block.remove();
      }, 2500);
    };

    (function loop() {
      var rand = Math.round(Math.random() * (3000 - 500)) + 500;
      setTimeout(function () {
        spawnBlock();
        loop();
      }, rand);
    })();
  };
};

export default noteBlocks;
