/* eslint-disable prettier/prettier */
import { create } from 'zustand';

interface State {
    postId: number
    selectPostId: (id: number) => void
}

export const usePostsStore = create<State>((set) => ({
    postId: 0,
    selectPostId: (id: number) => set(() => ({ postId: id })),
}));
