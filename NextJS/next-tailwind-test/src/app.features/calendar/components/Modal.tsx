import React from 'react';
import useStore from 'src/app.modules/store';

function Modal() {
	const { date, user, modalClose } = useStore();
	return (
		<div>
			<div onClick={modalClose} className="fixed top-0 left-0 w-[100%] h-[100%] opacity-1 z-1"></div>
			<div className="absolute left-0 bottom-0 bg-gray-200 w-[100%] h-[35%] rounded-t-[10%] flex flex-col justify-center items-center">
				<div>{date}</div>
				<div>
					{Object.entries(user).map(([_key, value]) => (
						<div>{value}</div>
					))}
				</div>
				<div>출근하기</div>
			</div>
		</div>
	);
}

export default Modal;
