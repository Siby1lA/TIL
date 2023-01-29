import React, { useState } from 'react';
import useStore from 'src/app.modules/store';
import MakeCalendar from '../components/MakeCalendar';
import Modal from '../components/Modal';
import { WEEK } from '../constans';
import { IDumy, IUserInfo } from '../types';

// 초기 캘린더 더미 상태
const today = new Date();
const dumyData = {
	year: today.getFullYear(),
	month: today.getMonth(),
	schedule: {
		박수빈: {
			일: '08:00~12:00',
			목: '14:00~24:00',
		},
		정예원: {
			수: '12:00~20:00',
			토: '12:00~20:00',
		},
		이우진: {
			일: '12:00~20:00',
		},
		김하영: {
			수: '20:00~24:00',
		},
	},
};

function CalendarScreen() {
	const [calendar, setCalendar] = useState<IDumy>(dumyData);
	const { isOpen, modalOpen } = useStore();

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

	const onModalOpen = (index: string, user: IUserInfo) => {
		modalOpen(index, user);
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
						{WEEK.map((day, index) => (
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
						onModalOpen,
					})}
				</tbody>
			</table>
			{isOpen && <Modal />}
		</div>
	);
}

export default CalendarScreen;
