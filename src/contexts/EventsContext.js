import React, { createContext, useState, useCallback } from 'react';
import { startOfMonth } from 'date-fns';

export const EventsContext = createContext();

export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  // Default event template for creating new events (can be used elsewhere if needed)
  const defaultEvent = {
    title: '',
    description: '',
    startDateTime: new Date().toISOString(),
    endDateTime: new Date().toISOString(),
    color: '#1a73e8', // Default blue color
    recurrence: 'none', // Options: none, daily, weekly, monthly, custom
  };

  // Current month displayed in calendar (always start of the month)
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));

  // Date selected in calendar for creating/editing event
  const [selectedDate, setSelectedDate] = useState(null);

  // Boolean toggle for showing event form modal
  const [isEventFormOpen, setIsEventFormOpen] = useState(false);

  // The event being edited, or null if creating new
  const [editingEvent, setEditingEvent] = useState(null);

  // Add new event with a unique ID (timestamp-based)
  const addEvent = useCallback((newEvent) => {
    setEvents(prevEvents => [
      ...prevEvents, 
      { ...newEvent, id: Date.now().toString() }
    ]);
  }, []);

  // Update existing event by matching ID
  const updateEvent = useCallback((updatedEvent) => {
    setEvents(prevEvents => 
      prevEvents.map(event => event.id === updatedEvent.id ? updatedEvent : event)
    );
  }, []);

  // Delete event by ID
  const deleteEvent = useCallback((eventId) => {
    setEvents(prevEvents => prevEvents.filter(event => event.id !== eventId));
  }, []);

  // Open form for a given date and optional event to edit
  const openEventForm = (date, eventToEdit = null) => {
    setSelectedDate(date);
    setEditingEvent(eventToEdit);
    setIsEventFormOpen(true);
  };

  // Close the event form and reset editing state
  const closeEventForm = () => {
    setIsEventFormOpen(false);
    setSelectedDate(null);
    setEditingEvent(null);
  };

  return (
    <EventsContext.Provider
      value={{
        events,
        addEvent,
        updateEvent,
        deleteEvent,
        currentMonth,
        setCurrentMonth,
        selectedDate,
        openEventForm,
        closeEventForm,
        isEventFormOpen,
        editingEvent,
        defaultEvent,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
