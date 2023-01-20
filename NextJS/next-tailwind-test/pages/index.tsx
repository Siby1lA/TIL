import type { NextPage } from 'next';
import Header from 'src/app.components/header/Header';
import Navigation from 'src/app.components/navigation/Navigation';
import HomeScreen from 'src/app.features/home/screens/HomeScreen';

const Home: NextPage = () => {
	return (
		<div className="flex h-screen flex-col justify-between bg-slate-50">
			<Header />
			<HomeScreen />
			<Navigation />
		</div>
	);
};

export default Home;
