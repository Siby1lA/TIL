import useStore from '@/store';
import { NextPage } from 'next';

const Home: NextPage = () => {
	const { isDark, handleIsDark } = useStore();
	return (
		<div className={`w-screen h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
			<h1 className="text-2xl font-bold underline">Hello world!</h1>
			<p className="italic">tailwind TEST</p>
			<p>Zustand TEST : 지금 화면은 {isDark ? '다크' : '화이트'} 모드이다</p>
			<button onClick={handleIsDark}>클릭시 화면 모드 변경</button>
		</div>
	);
};
export default Home;
