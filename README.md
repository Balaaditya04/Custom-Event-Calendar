# Custom Event Calendar 🗓️

A modern, user-friendly custom event calendar built with React. Users can add, view, and manage events easily using an interactive interface.

## 🚀 Live Demo

Check it out live here: [Custom Event Calendar on GitHub Pages](https://Balaaditya04.github.io/Custom-Event-Calendar)

## 📦 Features

- Monthly calendar view
- Add, edit, and delete events
- Responsive and accessible UI
- Built using React, MUI, and Date-FNS

## 🛠️ Getting Started

### Prerequisites

Ensure you have these installed:

- Node.js (v16+ recommended)
- npm (comes with Node)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Balaaditya04/Custom-Event-Calendar.git
   cd Custom-Event-Calendar

2. Install dependencies:
    npm install

3. Run Locally
   Start the development server:
   npm start
The app will run at http://localhost:3000.

4. Build for Production
   To create a production build:
   npm run build

5. Deploy to GitHub Pages
   This app uses gh-pages for deployment.

To deploy:

Ensure "homepage" is added in your package.json like so:

json:

"homepage": "https://Balaaditya04.github.io/Custom-Event-Calendar"

Add the following deploy script:

json:

"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
Then deploy: 

npm run deploy


