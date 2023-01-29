import React from 'react';
import { getDayOfWeek } from 'src/app.modules/util/calendar';
import { IUserInfo } from '../types';

function Schedule(
	idx: string,
	todo: { [x: string]: string },
	onModalOpen: {
		(arg0: string, arg1: IUserInfo): void;
	}
) {
	let userInfo: IUserInfo = {
		name: [],
		time: [],
	};

	for (let key in todo) {
		const data = Object.keys(todo[key]);
		for (let i = 0; i < data.length; i++) {
			const filter = data[i] === getDayOfWeek(idx);
			if (filter) {
				userInfo.time.push(todo[key][data[i]]);
				userInfo.name.push(key);
			}
		}
	}
	if (userInfo.name.length > 0) {
		return (
			<div
				onClick={() => {
					onModalOpen(idx, userInfo);
					console.log(idx);
				}}
				className="cursor-pointer"
			>
				{userInfo.name.map((item: string | undefined, index: React.Key | null | undefined) => (
					<div key={index}>
						<li className="my-1 p-[0.5px] text-[12px] rounded-md text-center bg-[#808e9b] text-white">{item}</li>
					</div>
				))}
			</div>
		);
	}
	return null;
}

export default Schedule;
