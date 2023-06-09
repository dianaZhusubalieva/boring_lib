import React, { useEffect, useState } from "react";
import { DAYS } from "components/calendar/custom/consts";
import "components/calendar/custom/calendar.scss";
import { getActualDays, getDaysInMonth, getMonthYear, nextMonth } from "components/calendar/custom/utils";

const Calendar = ({ setActiveDay, activeDay, currentDate, setCurrentDate }:any) => {
	const [monthOfActiveDay, setMonthOfActiveDay] = useState(new Date().getMonth());
	const [daysLeft, setDaysLeft] = useState(null);

	const showPrevMonth = () => {
		if (currentDate.getMonth() - 1 === new Date().getMonth()) {
			setCurrentDate(new Date());
		}
	};

	const showNextMonth = () => {
		if (currentDate.getMonth() === new Date().getMonth()) {
			nextMonth(currentDate, setCurrentDate);
		}
	};

	const activeDayClassname = (day:any, disabled:any) => {
		if (currentDate.getMonth() === monthOfActiveDay && activeDay === day) {
			return "active";
		}
		if (disabled) {
			return "disabled_span";
		}
	};

	useEffect(() => {
		if (new Date().getMonth() === currentDate.getMonth()) {
			//@ts-ignore
			setDaysLeft(getDaysInMonth(currentDate) - currentDate.getDate());
		}
	}, [currentDate]);

	return (
		<div className="calendar">
			<div className="calendar__title">
				<div onClick={showPrevMonth}>{"<"}</div>
				{getMonthYear(currentDate)}
				<div onClick={showNextMonth}>{">"}</div>

			</div>

			<div className="day_names">
				{DAYS.map((day, index) => (
					<div key={index} className="day-name">
						{day}
					</div>
				))}
			</div>
			<div className="days">
				{getActualDays(currentDate, daysLeft).map(({ disabled, day }, index) => (
					<div
						key={index}
						id={`${currentDate.getFullYear()}/${currentDate.getMonth()}/${day}`}
						onClick={() => {
							if (!disabled) {
								setActiveDay(day);
								setMonthOfActiveDay(currentDate.getMonth());
							}
						}}
					>
						<span className={activeDayClassname(day, disabled)}>{day}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Calendar;
