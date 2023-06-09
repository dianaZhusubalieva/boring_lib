export const getDaysInMonth = date => {
	return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

export const range = days => {
	return Array.from({ length: days }, (_, i) => i + 1);
};

export const getMonthYear = date => {
	const d = date.toDateString().split(" ");
	return `${d[1]} ${d[3]}`;
};

export const nextMonth = (date, cb) => {
	const mon = date.getMonth();
	if (mon < 11) {
		date.setMonth(mon + 1);
	} else {
		date.setMonth(0);
		date.setFullYear(date.getFullYear() + 1);
	}
	//get date with first day of month
	const nextMonthDate = new Date(date.getFullYear(), date.getMonth(), 1);
	cb(new Date(nextMonthDate));
};

//может пригодиться
// export const prevMonth = (date, cb) => {
// 	const mon = date.getMonth();
// 	if (mon > 0) {
// 		date.setMonth(mon - 1);
// 	} else {
// 		date.setMonth(11);
// 		date.setFullYear(date.getFullYear() - 1);
// 	}
// 	cb(new Date(date));
// };

export const getActualDays = (date, daysLeft) => {
	let arr = [];
	const daysInMonth = range(getDaysInMonth(date));
	const indexOfFirstDayInMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDay();

	const days = [...Array(indexOfFirstDayInMonth), ...daysInMonth];

	const between = (x, min, max) => {
		return x >= min && x <= max;
	};

	for (let i = 0; i < days.length; i += 7) {
		const chunk = days.slice(i, i + 7);
		const resultChunk = chunk.map((item, index) => ({
			// disabled: index === 6 || !between(item, date.getDate(), date.getDate() + (14 - daysLeft)),
			disabled: false,
			day: item,
		}));
		arr = arr.concat(resultChunk);
	}
	return arr;
};
