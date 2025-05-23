// Hey! We’re setting up our React app here.
// No need for the default CSS, so that line’s gone.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { EventsProvider } from './contexts/EventsContext';

// This grabs the root div in our HTML where the app will live.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Now we tell React to render our app inside that root.
// Wrapping App with EventsProvider means any part of our app
// can easily access event data without passing props all around.
root.render(
  <React.StrictMode>
    <EventsProvider>
      <App />
    </EventsProvider>
  </React.StrictMode>
);

// Bonus: If you want to keep an eye on how your app performs,
// you can use reportWebVitals — just pass a function like console.log
// or hook it up to an analytics tool. Just a heads-up!
