import React from 'react';

function Schedule(index: string, todo: { [x: string]: string[] }) {
	const result: JSX.Element[] | null = [];
	if (todo[index] !== undefined) {
		todo[index].map((item) => {
			result.push(
				<div key={index + item}>
					<li className="my-1 p-[0.5px] text-[12px] rounded-md text-center bg-[#808e9b] text-white">{item}</li>
				</div>
			);
		});
		return <div className="cursor-pointer">{result}</div>;
	}
	return null;
}

export default Schedule;
