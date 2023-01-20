import React from 'react';

function HomeScreenIntro() {
	return (
		<div className="flex justify-center items-center mb-10">
			<p className="mr-10 text-[25px] font-medium">
				안녕하세요, <br></br>일잘러 <span className="text-emerald-300">{`박수빈`}님</span>
				<br></br> 오늘도 화이팅!
			</p>
			<div>
				<img width="150" src="../intro.png" />
			</div>
		</div>
	);
}
export default HomeScreenIntro;
