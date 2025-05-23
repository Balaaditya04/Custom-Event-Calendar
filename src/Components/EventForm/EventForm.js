import React, { useContext, useState } from 'react';
import { EventsContext } from '../../contexts/EventsContext';

const EventForm = () => {
  const { selectedDate, closeEventForm, addEvent, editingEvent, updateEvent, deleteEvent } = useContext(EventsContext);
  const [formData, setFormData] = useState({
    title: editingEvent?.title || '',
    description: editingEvent?.description || '',
    startDateTime: editingEvent?.startDateTime || selectedDate.toISOString(),
    endDateTime: editingEvent?.endDateTime || selectedDate.toISOString()
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingEvent) {
      updateEvent({ ...formData, id: editingEvent.id });
    } else {
      addEvent(formData);
    }
    closeEventForm();
  };

  const handleDelete = () => {
    if (editingEvent) {
      deleteEvent(editingEvent.id);
      closeEventForm();
    }
  };

  return (
    <div className="event-form-overlay">
      <div className="event-form">
        <h2>{editingEvent ? 'Edit Event' : 'Add Event'}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
          <div>
            <label>Start Date/Time:</label>
            <input
              type="datetime-local"
              value={formData.startDateTime.slice(0, 16)}
              onChange={(e) => setFormData({ ...formData, startDateTime: e.target.value })}
              required
            />
          </div>
          <div>
            <label>End Date/Time:</label>
            <input
              type="datetime-local"
              value={formData.endDateTime.slice(0, 16)}
              onChange={(e) => setFormData({ ...formData, endDateTime: e.target.value })}
              required
            />
          </div>
          <div className="form-buttons">
            <button type="submit">{editingEvent ? 'Update' : 'Add'}</button>
            {editingEvent && <button type="button" onClick={handleDelete}>Delete</button>}
            <button type="button" onClick={closeEventForm}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;