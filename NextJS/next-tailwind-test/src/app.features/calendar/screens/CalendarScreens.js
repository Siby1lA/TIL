import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

const CalendarScreens = () => {
	const [year, setYear] = useState(new Date().getFullYear());
	const [monthIndex, setMonthIndex] = useState(new Date().getMonth());

	const handlePrevYear = () => setYear(year - 1);
	const handleNextYear = () => setYear(year + 1);
	const handlePrevMonth = () => setMonthIndex(monthIndex - 1);
	const handleNextMonth = () => setMonthIndex(monthIndex + 1);

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<h1>{year}</h1>
			<div style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
				<button onClick={handlePrevYear}>{'<'}</button>
				<SwipeableViews index={monthIndex} onChangeIndex={setMonthIndex}>
					{months.map((month, i) => (
						<div key={month} style={{ padding: 20 }}>
							<h2>{month}</h2>
						</div>
					))}
				</SwipeableViews>
				<button onClick={handleNextYear}>{'>'}</button>
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
				<button onClick={handlePrevMonth}>{'<'}</button>
				<button onClick={handleNextMonth}>{'>'}</button>
			</div>
		</div>
	);
};

export default CalendarScreens;
