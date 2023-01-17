import create from 'zustand';

interface IStore {
	isDark: boolean;
	handleIsDark: () => void;
}

const useStore = create<IStore>((set) => ({
	isDark: false,
	handleIsDark: () => set((state) => ({ isDark: !state.isDark })),
}));

export default useStore;
