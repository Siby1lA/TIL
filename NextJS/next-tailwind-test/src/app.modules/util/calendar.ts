// 현재 날짜를 schedule의 key값 형식으로 변환
// key ex) 2023.1.1
export const transIdx = (order: string, year: number, month: number, day: number) => {
	const transString = (year: number, month: number, day: number): string => {
		return year + '.' + month + '.' + day;
	};
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
