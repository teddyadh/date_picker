import React from 'react';
import moment from 'moment';

const Presets = (props) => {
  const { startDate, endDate, displayFormat, handlePresets } = props;

  const today = moment();
  const presets = [
    {
      text: 'Next Week',
      start: today,
      end: moment().add(1, 'week'),
    },
    {
      text: 'Next Month',
      start: today,
      end: moment().add(1, 'month'),
    },
    {
      text: 'Next 3 Months',
      start: today,
      end: moment().add(3, 'month'),
    }];

  return (
    <div className='p-3'>
      {presets.map(({ text, start, end }) => {
        const isSelected = moment(start).format(displayFormat) === moment(startDate).format(displayFormat) && moment(end).format(displayFormat) === moment(endDate).format(displayFormat);
        return (
          <button
            key={text}
            type="button"
            className={`btn btn-sm ${isSelected ? 'btn-primary' : 'btn-outline-primary'}`}
            style={{ marginRight: 10 }}
            onClick={() => handlePresets(start, end)}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
}

export default Presets;