import { create } from "zustand";

interface InfoModalStore {
    movieId?: string;
    isOpen: boolean;
    onOpen: (movieId: string) => void;
    onClose: () => void;
}

const useInfoModal = create<InfoModalStore>((set) => ({
    movieId: undefined,
    isOpen: false,
    onOpen: (movieId) => set({ isOpen: true, movieId }),
    onClose: () => set({ isOpen: false, movieId: undefined })
}));

export default useInfoModal;