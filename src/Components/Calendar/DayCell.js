import React, { useContext } from 'react';
import { format, isSameMonth } from 'date-fns';
import { EventsContext } from '../../contexts/EventsContext';

const DayCell = ({ day, isToday, monthStart, eventsOnDay = [] }) => {
  const { openEventForm } = useContext(EventsContext);
  const isCurrentMonth = isSameMonth(day, monthStart);

  const handleInteraction = (eventToEdit = null) => {
    openEventForm(day, eventToEdit);
  };

  return (
    <div
      className={`day-cell ${!isCurrentMonth ? 'disabled' : ''} ${isToday ? 'today' : ''}`}
      onClick={() => handleInteraction()}
    >
      <div className="day-number">{format(day, 'd')}</div>
      <div className="events-list">
        {eventsOnDay.slice(0, 3).map(event => (
          <div
            key={event.id}
            className="event-item"
            onClick={(e) => {
              e.stopPropagation();
              handleInteraction(event);
            }}
            title={`${event.title}\n${format(new Date(event.startDateTime), 'h:mm a')}`}
          >
            {event.title}
          </div>
        ))}
        {eventsOnDay.length > 3 && (
          <div className="more-events">+{eventsOnDay.length - 3} more</div>
        )}
      </div>
    </div>
  );
};

export default DayCell;