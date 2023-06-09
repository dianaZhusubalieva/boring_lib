import React, { useState } from "react";
import Calendar from "react-calendar";
import "./styles.scss";

const CalendarWithLib = () => {
  const [date, setDate] = useState<any>(new Date());
  return (
    <div className={"calendar-wrapper"}>
      <Calendar
        selectRange
        onChange={(value) => {
            console.log("value", value)
          setDate(value);
        }}
        value={date}
        returnValue={"range"}
      />
    </div>
  );
};

export default CalendarWithLib;

