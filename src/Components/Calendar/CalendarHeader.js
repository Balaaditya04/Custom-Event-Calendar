import   React, { useContext } from 'react';
import { EventsContext } from '../../contexts/EventsContext';
import { format, addMonths, subMonths } from 'date-fns';

const CalendarHeader = () => {
  const { currentMonth, setCurrentMonth } = useContext(EventsContext);

  const scootForwardOneMonth = () => {
      setCurrentMonth(   addMonths(currentMonth, 1) );
  };

  const rewindBackAmonth = () => {
  setCurrentMonth( 
      subMonths(currentMonth, 1) );
  };

  return (
    <div className="calendar-header">

      <button onClick={rewindBackAmonth} aria-label="Go Back A Month">←</button>
      
      <h2>{ format(currentMonth, 'MMMM yyyy') }</h2>
      
      <button onClick={scootForwardOneMonth} aria-label="Hop to Next Month">→</button>
    
    </div>
  );
};

export default CalendarHeader;
