import React, { useState } from 'react';
import useStore from 'src/app.modules/store';
import MakeCalendar from '../components/MakeCalendar';
import Modal from '../components/Modal';
import { IDumy } from '../types';

// 초기 캘린더 더미 상태
const today = new Date();
const dumyData = {
	year: today.getFullYear(),
	month: today.getMonth(),
	schedule: {
		'2023.1.5': ['박수빈', '정예원', '원지윤'],
		'2023.1.27': ['박수빈', '최영진', '김하영'],
		'2023.12.17': ['이성호'],
	},
};
const DAY_WEEK: string[] = ['일', '월', '화', '수', '목', '금', '토'];

function CalendarScreen() {
	const [calendar, setCalendar] = useState<IDumy>(dumyData);
	const { isOpen } = useStore();
	// 날짜 관련
	const year = calendar.year;
	const month = calendar.month;
	const yearMonth = year + '.' + (month + 1);
	const lastDate = Number(new Date(year, month + 1, 0).getDate());
	const firstDay = Number(new Date(year, month, 1).getDay());

	// 일정
	const todo = calendar.schedule;

	const { modalOpen } = useStore();
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
	const modalOpenFun = (index: any, todo: any) => {
		modalOpen(index, todo[index]);
	};
	return (
		<div className="flex flex-col  items-center p-8">
			<div className="flex w-[100%] mb-5">
				<button className="mr-[30px] font-[30px]" onClick={onDecreases}>
					&lt;
				</button>
				<p className="text-[20px] font-bold ">{yearMonth}</p>
				<button className="ml-[30px] font-[30px]" onClick={onIncreases}>
					&gt;
				</button>
			</div>
			<table className="w-[100%] table-fixed">
				<thead className="text-center">
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
						modalOpenFun,
					})}
				</tbody>
			</table>
			{isOpen && <Modal />}
		</div>
	);
}

export default CalendarScreen;
