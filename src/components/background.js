const background = () => {
  // Get the audio and canvas elements
  const audio = document.getElementById('audio-player');
  const canvas = document.getElementById('canvas');

  // Set the canvas dimensions
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Get the canvas context
  const context = canvas.getContext('2d');

  // Create an array to store the fire particles
  const particles = [];

  // Create a function to create the fire particles
  function createParticles() {
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * canvas.width;
      const y = canvas.height;
      const size = Math.random() * 20;
      const particle = { x, y, size };
      particles.push(particle);
    }
  }

  // Call the createParticles function
  createParticles();

  // Create a function to draw the fire particles
  function drawParticles() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      context.beginPath();
      context.fillStyle = '#ff6633';
      context.fillRect(
        particle.x,
        particle.y,
        particle.size,
        particle.size * 3,
      );
      context.closePath();
      particle.y -= 5;

      // If the particle is above the canvas, reset its position
      if (particle.y < 0) {
        particle.y = canvas.height;
      }
    });
  }

  // Call the drawParticles function
  drawParticles();

  // Use the Web Audio API to analyze the sound
  const audioContext = new AudioContext();
  const source = audioContext.createMediaElementSource(audio);
  const analyser = audioContext.createAnalyser();
  source.connect(analyser);
  analyser.connect(audioContext.destination);

  // Create a frequency data array
  const frequencyData = new Uint8Array(analyser.frequencyBinCount);

  // Create a function to update the fire particles based on the sound frequency
  function updateParticles() {
    analyser.getByteFrequencyData(frequencyData);

    particles.forEach((particle, index) => {
      const frequency = frequencyData[index * 2];

      particle.size = frequency / 15;

      if (particle.size < 1) {
        particle.size = 1;
      }
    });
  }

  // Call the updateParticles function on an interval
  setInterval(updateParticles, 50);
};

export default background;
