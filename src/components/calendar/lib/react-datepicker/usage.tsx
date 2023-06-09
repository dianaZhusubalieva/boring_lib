import React from 'react';
import CustomDateRangePicker from "components/calendar/lib/react-datepicker/DatePickerLib";

const Usage = () => {
    const handleDatesChange = (dates:any)=>{
        console.log("dates", dates)
    }
    return (

        <div>
            <CustomDateRangePicker
                startDate={new Date()} // Specify the start date
                endDate={new Date()} // Specify the end date
                onDatesChange={handleDatesChange} // Handle date range selection
            />
        </div>
    );
};

export default Usage;