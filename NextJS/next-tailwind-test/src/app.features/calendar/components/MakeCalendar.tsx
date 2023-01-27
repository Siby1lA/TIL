import React from 'react';
import { transIdx } from 'src/app.modules/util/calendar';
import { IMakeCal } from '../types';
import Schedule from './Schedule';

const MakeCalendar = ({ year, month, firstDay, lastDate, todo }: IMakeCal) => {
	const result = [];
	const makeDay = (week: number) => {
		const result = [];
		// 첫 주
		if (week == 1) {
			const prevLastDate = Number(new Date(year, month, 0).getDate());
			for (let i = 1; i <= 7; i++) {
				// 저번 달 날짜
				if (i <= firstDay) {
					const now = prevLastDate - firstDay + i;
					const idx = transIdx('PREV', year, month, now);
					// 이전 달 예시 날짜
					result.push(
						<td className="text-gray-400 align-text-top" key={idx}>
							{now}
							<div>{Schedule(idx, todo)}</div>
						</td>
					);
				}
				// 현재 달 날짜
				else {
					const now = i - firstDay;
					const idx = transIdx('', year, month, now);
					// 첫주 날짜
					result.push(
						<td className="h-[100px] align-text-top" key={idx}>
							{now}
							<div>{Schedule(idx, todo)}</div>
						</td>
					);
				}
			}
		} else {
			const startDate = (week - 1) * 7;
			for (let i = startDate; i <= week * 7 - 1; i++) {
				// 현재 달 날짜
				if (i - firstDay < lastDate) {
					const now = i - firstDay + 1;
					const idx = transIdx('', year, month, now);
					// 2주~4주차 날짜
					result.push(
						<td className="h-[100px] align-text-top" key={idx}>
							{now}
							<div>{Schedule(idx, todo)}</div>
						</td>
					);
				}
				// 다음 달 예시 날짜
				else {
					const now = i - lastDate - firstDay + 1;
					const idx = transIdx('NEXT', year, month, now);
					result.push(
						<td className="text-gray-400 align-text-top" key={idx}>
							{now}
							<div>{Schedule(idx, todo)}</div>
						</td>
					);
				}
			}
		}
		return result;
	};

	// 주 계산
	const week = Math.ceil((firstDay + lastDate) / 7);
	for (let i = 1; i <= week; i++) {
		result.push(<tr key={week + i}>{makeDay(i)}</tr>);
	}
	return result;
};

export default MakeCalendar;
