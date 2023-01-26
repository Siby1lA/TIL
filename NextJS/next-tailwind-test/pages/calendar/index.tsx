import type { NextPage } from 'next';
import Header from 'src/app.components/header/Header';
import Navigation from 'src/app.components/navigation/Navigation';
import CalendarScreen from 'src/app.features/calendar/screens/CalendarScreen';

const CalendarPage: NextPage = () => {
	return (
		<div className="flex h-screen flex-col justify-between  bg-slate-50">
			<Header />
			<CalendarScreen />
			<Navigation />
		</div>
	);
};

export default CalendarPage;
