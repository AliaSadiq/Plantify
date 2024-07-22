import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../CustomCalendar.css" // Import custom CSS

const CustomCalendar = () => {
    const [value, setValue] = useState(new Date());

    const handleDateChange = (date) => {
        setValue(date);
    };

    return (
        <div className="calendar-container">
            <h2 className="text-xl font-bold mb-4">Event Calendar</h2>
            <Calendar
                onChange={handleDateChange}
                value={value}
                tileContent={({ date, view }) => {
                    // Custom content for each tile (date)
                    if (view === 'month' && date.getDate() === 11) {
                        return (
                            <div className="event-marker">
                                <span>Camping at Ranca Upas</span>
                            </div>
                        );
                    }
                    return null;
                }}
            />
        </div>
    );
};

export default CustomCalendar;
