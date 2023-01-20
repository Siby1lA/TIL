import React from 'react';
function Workout() {
	return (
		<div className="my-5 flex justify-around items-center rounded-2xl drop-shadow bg-gray-800 p-3">
			<div className="text-white">
				<div>
					<div>출근도장</div>
					<div>출근확인</div>
				</div>
				<div>1월 12일 근무 시작하기</div>
			</div>
			<div>
				<img width="150" src="../workout.png" />
			</div>
		</div>
	);
}
export default Workout;
