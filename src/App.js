import React, { useState } from 'react';

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import Presets from './Presets';

const App = () => {
  const displayFormat = "DD/MM/YYYY";

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <div className="App">
        <DateRangePicker
        startDate={startDate}
        startDateId="s_id"
        endDate={endDate}
        endDateId="e_id"
        onDatesChange={({ startDate, endDate }) => { setStartDate(startDate); setEndDate(endDate); }}
        focusedInput={focusedInput}
        onFocusChange={e => setFocusedInput(e)}
        displayFormat={displayFormat}
        renderCalendarInfo={() => <Presets
          startDate={startDate}
          endDate={endDate}
          displayFormat={displayFormat}
          handlePresets={(start, end) => {
            setStartDate(start);
            setEndDate(end);
          }}
        />}
      />
      <div className="mt-3 mb-1">Start Date: {startDate && startDate.format('ll')}</div>
      <div>End Date: {endDate && endDate.format('ll')}</div>
    </div>
  );
}

export default App;