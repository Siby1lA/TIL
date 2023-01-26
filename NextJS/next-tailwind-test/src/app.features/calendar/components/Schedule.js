import React, { useReducer } from 'react';
import Style from './Style';

const Schedule = (index, todo) => {
	const result = [];
	if (todo[index] !== undefined) {
		todo[index].map((item) => {
			result.push(
				<li key={index + item} onClick={() => console.log(`${item[0]} 누름`)} style={Style(item[1])}>
					{item[0]}
				</li>
			);
		});
		return result;
	}
	return null;
};

export default Schedule;
