/**
 * Retrieves the button and audio elements from the DOM.
 * @const {HTMLElement} button - The button element that triggers joke telling.
 * @const {HTMLMediaElement} audioElement - The audio element used for playing the joke audio.
 */
const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

/**
 * Toggles the disabled state of the button to prevent or allow user interaction.
 */
function toggleButton() {
  button.disabled = !button.disabled;
}

/**
 * Sends a request to the VoiceRSS API to convert the provided joke text to speech
 * and plays the audio through the audio element.
 * @param {string} joke - The joke text to be converted to speech.
 */
function tellMe(joke) {
  console.log('tell me:', joke);

  VoiceRSS.speech({
    key: 'eccbfed46e934467b7eba1b07b7e2cf8', // API key for VoiceRSS
    src: joke, // Text to be converted to speech
    hl: 'en-us', // Language code for speech
    v: 'Linda', // Voice identifier for speech
    r: 0, // Speech rate (-10 to 10)
    c: 'mp3', // Audio codec
    f: '44khz_16bit_stereo', // Audio format
    ssml: false, // Whether src text contains SSML tags
  });
}

/**
 * Fetches a programming joke from the JokeAPI and then uses the VoiceRSS API
 * to convert the joke to speech. The function toggles the button's disabled state
 * to prevent multiple requests before the current joke is played.
 */
async function getJokes() {
  let joke = '';
  const apiUrl =
    'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }

    tellMe(joke); // Converts joke to speech and plays it
    toggleButton(); // Disables button while joke is being played
  } catch (error) {
    console.log('whoops, fetching failed:', error);
  }
}

/**
 * Adds event listeners to the button and audio element. The button's click event
 * triggers fetching and playing a new joke. The audio element's ended event re-enables
 * the button once the joke has finished playing.
 */
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);
