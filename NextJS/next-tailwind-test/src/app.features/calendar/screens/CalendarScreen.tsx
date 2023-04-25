import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
function CalendarScreen() {
	const [open, setOpen] = useState(false);

	return (
		<div className="w-screen h-[100vh]">
			<div className="main">
				<button onClick={() => setOpen(!open)}>{open ? 'CLOSE' : 'OPEN'} SHEET</button>
			</div>

			<BottomSheet open={open} onDismiss={() => setOpen(false)} snapPoints={({ maxHeight }) => 0.9 * maxHeight}>
				<div>반갑다</div>
			</BottomSheet>
		</div>
	);
}

export default CalendarScreen;
