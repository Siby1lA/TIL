import React from 'react';

const Schedule = (index: string, todo: { [x: string]: string[] }) => {
	const result: JSX.Element[] | null = [];
	if (todo[index] !== undefined) {
		todo[index].map((item) => {
			result.push(
				<li
					onClick={() => console.log(index)}
					className="my-1 p-[0.5px] text-[12px] rounded-md text-center bg-[#808e9b] text-white"
					key={index + item}
				>
					{item}
				</li>
			);
		});
		return <div className="cursor-pointer">{result}</div>;
	}
	return null;
};

export default Schedule;
