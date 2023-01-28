import { use } from 'react';
import create from 'zustand';

interface IStore {
	isOpen: boolean;
	date?: string;
	user?: string[];
	modalOpen: (todo: string, user: string[]) => void;
	modalClose: () => void;
}

const useStore = create<IStore>((set) => ({
	isOpen: false,
	modalOpen: (date, user) => set(() => ({ isOpen: true, date, user })),
	modalClose: () => set(() => ({ isOpen: false })),
}));

export default useStore;
