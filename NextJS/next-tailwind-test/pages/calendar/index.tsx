import type { NextPage } from 'next';
import Navigation from 'src/app.components/navigation/Navigation';
import CalendarScreen from 'src/app.features/calendar/screens/CalendarScreen';
import CalendarScreens from 'src/app.features/calendar/screens/CalendarScreens';

const CalendarPage: NextPage = () => {
	return (
		<div className="flex h-screen flex-col justify-between  bg-slate-50">
			<CalendarScreen />
			<Navigation />
		</div>
	);
};

export default CalendarPage;
