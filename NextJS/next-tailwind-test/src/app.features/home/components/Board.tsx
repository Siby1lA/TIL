import React from 'react';

function Board() {
	return (
		<div className="flex justify-between items-center rounded-2xl drop-shadow bg-slate-50 p-3">
			<div className="flex items-center">
				<div className="mr-3 bg-red-400 rounded-xl p-2 text-white">전달사항</div>
				<div className="text-[18px]">화장실 문 뿌셔짐</div>
			</div>
			<div className="text-gray-500">전체보기</div>
		</div>
	);
}
export default Board;
