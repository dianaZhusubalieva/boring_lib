import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.scss";

interface Props {
  startDate: any;
  endDate: any;
  onDatesChange: any;
}
const CustomDateRangePicker = ({
  startDate,
  endDate,
  onDatesChange,
}: Props) => {
  const [selectedStartDate, setSelectedStartDate] = useState(startDate);
  const [selectedEndDate, setSelectedEndDate] = useState(endDate);

  const handleDatesChange = (dates: any) => {
    const [start, end] = dates;

    // Check if the range exceeds 30 days
    const daysDiff = Math.round((end - start) / (1000 * 60 * 60 * 24));
    if (daysDiff <= 30) {
      setSelectedStartDate(start);
      setSelectedEndDate(end);
      onDatesChange(dates);
    }
  };

  const filterDate = (date: Date) => {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return date >= thirtyDaysAgo;
  };


  return (
    <DatePicker
      selected={selectedStartDate}
      onChange={handleDatesChange}
      startDate={selectedStartDate}
      endDate={selectedEndDate}
      filterDate={filterDate}
      selectsRange
      inline
      monthsShown={2}
      calendarClassName={"custom-datepicker"}
      locale={"ru"}
    />
  );
};

export default CustomDateRangePicker;
