import React from 'react';
interface Props {
	src: string;
	title: string;
}
function DumyCompo({ src, title }: Props) {
	return (
		<div className="flex justify-center rounded-2xl drop-shadow bg-slate-100 w-[47%]">
			<div>
				<div className="p-6 w-[160px]">
					<img src={src} />
				</div>
				<div className="text-center mb-3">{title}</div>
			</div>
		</div>
	);
}

export default DumyCompo;
