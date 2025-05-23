import React, { useContext } from 'react';
import './App.css';
import Calendar from './Components/Calendar/Calendar';
import EventForm from './Components/EventForm/EventForm';
import { EventsContext } from './contexts/EventsContext';

function App() {
  const { isEventFormOpen } = useContext(EventsContext);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Custom Event Calendar</h1>
      </header>
      <main>
        <Calendar />
        {isEventFormOpen && <EventForm />}
      </main>
    </div>
  );
}

export default App;
