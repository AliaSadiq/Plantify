import React, { useState } from 'react';

const Calendar = ({ events }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const numDays = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: numDays }, (_, i) => i + 1);
  };

  const hasEvent = (day) => {
    if (!events || events.length === 0) {
      return false; // No events available
    }
    const dateStr = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${day}`;
    return events.some(event => new Date(event.start).toISOString().startsWith(dateStr));
  };
  

  return (
    <div className="right-2 top-72 p-2 bg-white rounded-md h-auto w-56 shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}>
          Prev
        </button>
        <h2 className="text-lg font-bold">{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</h2>
        <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}>
          Next
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-xs md:text-sm text-center">{day}</div>
        ))}
        {getDaysInMonth().map(day => (
          <div
            key={day}
            className={`text-xs md:text-sm text-center ${hasEvent(day) ? 'bg-blue-500 text-white rounded-full' : ''}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
