import React from 'react';
import HomeScreenIntro from 'src/app.features/home/components/HomeScreenIntro';
import Board from '../components/Board';
import DumyCompo from '../components/DumyCompo';
import Workout from '../components/Workout';

function HomeScreen() {
	return (
		<div className="p-7">
			<HomeScreenIntro />
			<Board />
			<Workout />
			<div className="flex">
				<DumyCompo src={'../total.png'} title={'시재점검'} />
				<DumyCompo src={'../total.png'} title={'체크리스트'} />
			</div>
		</div>
	);
}
export default HomeScreen;
