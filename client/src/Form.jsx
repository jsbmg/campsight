import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  }

  return (
      <div className='flex border justify-center gap-8 p-4'>
        <div>
          <h2 className='font-bold m-2'>Select Dates:</h2>
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
          />
        </div>
        <div>
          <h2 className='font-bold m-2'>Search Campgrounds:</h2>
          <input type="text" className="px-1 border-2 rounded-sm"></input>
        </div>
      </div>
  );
}
