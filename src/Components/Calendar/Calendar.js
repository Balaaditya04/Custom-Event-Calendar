import React from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import './Calendar.css';

const Calendar = () => {
  return (
    <section className="calendar-container">
      <CalendarHeader />
      <CalendarGrid />
    </section>
  );
};

export default Calendar;
