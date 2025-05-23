import React, { useContext } from 'react';
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  isSameDay,
  isToday,
  startOfMonth,
  startOfWeek,
  parseISO,
} from 'date-fns';
import DayCell from './DayCell';
import { EventsContext } from '../../contexts/EventsContext';

const CalendarGrid = () => {
  const { currentMonth, events } = useContext(EventsContext);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const gridStart = startOfWeek(monthStart);
  const gridEnd = endOfWeek(monthEnd);

  const daysInGrid = eachDayOfInterval({ start: gridStart, end: gridEnd });
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="calendar-grid">
      <div className="day-names">
        {weekDays.map(day => (
          <div key={day} className="day-name">
            {day}
          </div>
        ))}
      </div>

      <div className="days-container">
        {daysInGrid.map((day, index) => {
          const eventsForDay = events.filter(event =>
            isSameDay(parseISO(event.startDateTime), day)
          );

          return (
            <DayCell
              key={index}
              day={day}
              monthStart={monthStart}
              isToday={isToday(day)}
              eventsOnDay={eventsForDay}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;
