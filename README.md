# Meme Generator

This project is a simple React component that allows users to create memes by generating random images and adding custom text.

## Getting Started

### Prerequisites
This project requires [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/meme-generator.git
   cd meme-generator
2. Install dependencies
   ```bash
   npm install
### Available Scripts
In the project directory, you can run:

npm start
Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload if you make edits, and you may see any lint errors in the console.

npm test
Launches the test runner in interactive watch mode. See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for best performance.

The build is minified, and filenames include hashes.
Your app is ready for deployment!

See the section about deployment for more information.

### Code Overview
The main Meme.js component uses a dataset of meme images. It picks a random meme image each time the button is clicked and displays it alongside custom top and bottom text

### Project Structure
memesData.js - Contains the data source for meme images.
Meme.js - The main component for generating and displaying memes.
CSS Styles - Customize the styling in your CSS file for .form, .form--input, .form--btn, and .meme--image.
