import { IUserInfo } from 'src/app.features/calendar/types';
import create from 'zustand';

interface IStore {
	isOpen: boolean;
	date?: string;
	user?: IUserInfo;
	modalOpen: (todo: string, user: IUserInfo) => void;
	modalClose: () => void;
}

const useStore = create<IStore>((set) => ({
	isOpen: false,
	modalOpen: (date, user) => set(() => ({ isOpen: true, date, user })),
	modalClose: () => set(() => ({ isOpen: false })),
}));

export default useStore;
