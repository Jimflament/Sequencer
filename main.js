import * as Tone from 'tone';

const apiUrl = 'https://api-hitloop.responsible-it.nl/test_json?seed=120';

// Make a request to the API and convert the response to a JSON object
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data.tracks[0].notes[0].name)
  })
  .catch(error => console.error(error));
