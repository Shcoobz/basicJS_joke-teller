# [LIVE DEMO](https://shcoobz.github.io/joke-teller/) -> Joke Teller

![Project Image](/img/joke-teller.png)

## Summary

Welcome to Joke Teller! This application provides a fun and interactive way to hear random jokes, especially focusing on programming humor. It features a simple, user-friendly interface that allows users to listen to a joke with just a click of a button.

The core functionality includes:

- Fetching random programming jokes from an online API.
- Utilizing the VoiceRSS API for text-to-speech conversion, allowing jokes to be heard audibly.
- A toggleable interface control to prevent multiple requests simultaneously, ensuring a smooth user experience.

## Features

### Fetch and Play Jokes

Joke Teller fetches random jokes from the JokeAPI, catering to various categories, including programming. Each joke is then audibly presented to the user through a text-to-speech service, providing a unique and engaging way to enjoy humor.

### User Interaction

The application is designed with simplicity in mind, featuring a single button to trigger the fetching and playback of jokes. This ensures that users of all ages and technical backgrounds can easily interact with the application and enjoy its offerings.

### Audio Controls

Upon fetching a joke, the application utilizes HTML5 audio controls to play the joke through the user's speakers. These controls are hidden to keep the interface clean but can be easily made visible for additional control over the playback.

### Additional Features

Future updates to Joke Teller may include customizable joke categories, allowing users to select the type of humor they're interested in, and adjustable voice settings for the text-to-speech output, providing a more personalized experience.

## Technologies

- HTML5: For structuring the web application's content.
- CSS3: For styling and presenting the content.
- JavaScript: To provide interactivity, fetch jokes from an API, and control audio playback.
- VoiceRSS API: Used for converting text jokes into audible speech.
- JokeAPI: Serves as the source of random jokes for the application.

## Handling API Keys Securely

While handling API keys securely is crucial for protecting sensitive data and services from unauthorized access, it's important to note that for this project, the API key used for VoiceRSS is embedded directly within the client-side code for simplicity and demonstration purposes. In a production environment or more sensitive applications, it is highly recommended to keep API keys secure by storing them on the server side or using environment variables and restricting API key permissions and access. For Joke Teller, the exposure risk is considered minimal, but always exercise caution and best practices when handling API keys in your projects.

---

_Note: This document provides an overview of Joke Teller. For detailed instructions and more information, please refer to the source code documentation._
