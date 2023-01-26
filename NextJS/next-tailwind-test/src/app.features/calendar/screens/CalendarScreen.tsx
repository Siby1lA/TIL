import React, { useState } from 'react';
import useStore from 'src/app.modules/store';
import MakeCalendar from '../components/MakeCalendar';

interface IDumy {
	year: number;
	month: number;
	schedule: any;
}
// 초기 캘린더 상태
const today = new Date();
const dumyData = {
	year: today.getFullYear(),
	month: today.getMonth(),
	schedule: {
		'2023.1.5': [
			['박수빈', 'gray'],
			['정예원', 'tomato'],
			['원지윤', 'green'],
		],
		'2023.1.7': [
			['박수빈', 'gray'],
			['최영진', 'yellow'],
			['김하영', 'aqua'],
		],
	},
};
const DAY_WEEK = ['일', '월', '화', '수', '목', '금', '토'];
function CalendarScreen() {
	const [calendar, setCalendar] = useState<IDumy>(dumyData);
	// 날짜 관련
	const year = calendar.year;
	const month = calendar.month;
	const yearMonth = year + '.' + (month + 1);
	const lastDate = Number(new Date(year, month + 1, 0).getDate());
	const firstDay = Number(new Date(year, month, 1).getDay());

	// 일정
	const todo = calendar.schedule;

	// Month 증가
	const onIncreases = () => {
		if (calendar.month < 11) {
			setCalendar((prev) => ({
				...prev,
				month: month + 1,
			}));
		} else {
			setCalendar((prev) => ({
				...prev,
				month: 0,
			}));
			setCalendar((prev) => ({
				...prev,
				year: year + 1,
			}));
		}
	};

	// Month 감소
	const onDecreases = () => {
		if (calendar.month > 0) {
			setCalendar((prev) => ({
				...prev,
				month: month - 1,
			}));
		} else {
			setCalendar((prev) => ({
				...prev,
				month: 11,
			}));
			setCalendar((prev) => ({
				...prev,
				year: year - 1,
			}));
		}
	};

	return (
		<div className="flex flex-col  items-center">
			<div className="flex">
				<button className="mr-[50px] font-[30px]" onClick={onDecreases}>
					&lt;
				</button>
				<p className="font-[30px]">{yearMonth}</p>
				<button className="ml-[50px] font-[30px]" onClick={onIncreases}>
					&gt;
				</button>
			</div>
			<table className="w-[80%] table-fixed">
				<thead>
					<tr>
						{DAY_WEEK.map((day, index) => (
							<td key={index}>{day}</td>
						))}
					</tr>
				</thead>
				<tbody>
					{MakeCalendar({
						year,
						month,
						firstDay,
						lastDate,
						todo,
					})}
				</tbody>
			</table>
		</div>
	);
}

export default CalendarScreen;
