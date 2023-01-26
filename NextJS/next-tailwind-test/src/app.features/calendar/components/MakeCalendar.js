import React from 'react';
import Schedule from './Schedule';
import { transString } from './CalcDate';

/*
 * 현재 날짜를 key값 형식으로 변환
 * key ex) 2021.10.11
 */
const returnIdx = (order, year, month, day) => {
	if (order == 'PREV') {
		if (month === 0) {
			return transString(year - 1, 12, day);
		}
		return transString(year, month, day);
	}
	if (order === 'NEXT') {
		if (month === 11) {
			return transString(year + 1, 1, day);
		}
		return transString(year, month + 2, day);
	}
	return transString(year, month + 1, day);
};

const MakeCalendar = ({ year, month, firstDay, lastDate, todo }) => {
	const result = [];

	const makeDay = (week) => {
		const result = [];
		// 첫 주
		if (week == 1) {
			const prevLastDate = parseInt(new Date(year, month, 0).getDate());
			for (let i = 1; i <= 7; i++) {
				// 저번 달 날짜
				if (i <= firstDay) {
					const now = prevLastDate - firstDay + i;
					const idx = returnIdx('PREV', year, month, now);
					// 이전 달 예시 날짜
					result.push(
						<td className="text-gray-400" key={idx}>
							{now}
							<div>{Schedule(idx, todo)}</div>
						</td>
					);
				}
				// 현재 달 날짜
				else {
					const now = i - firstDay;
					const idx = returnIdx('', year, month, now);
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
					const idx = returnIdx('', year, month, now);
					// 2주~4주차 날짜
					result.push(
						<td className="h-[100px]" key={idx}>
							{now}
							<div>{Schedule(idx, todo)}</div>
						</td>
					);
				}
				// 다음 달 날짜
				else {
					const now = i - lastDate - firstDay + 1;
					const idx = returnIdx('NEXT', year, month, now);

					{
						/* 다음 달 예시 날짜 */
					}
					result.push(
						<td className="text-gray-400" key={idx}>
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
