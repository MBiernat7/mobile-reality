/* eslint-disable prettier/prettier */
import useSWR from 'swr';

import { deleteMethod, fetcher, postMethod } from '../utils/api';

type Post = {
    id: number,
    title: string,
    description: string,
    createdAt: string
}

type Props = {
    id?: number
}

type Return = {
    posts: Post[],
    postsLoading: boolean;
    postsError: Error;

    post: Post;
    postIsLoading: boolean;
    postError: Error;

    addPost: (title: string, description: string) => Promise<void>;
    deletePost: (id: number) => Promise<void>;
}

export const usePosts = ({ id }: Props): Return => {
    const { data, error, isLoading, mutate } = useSWR('/posts', fetcher);

    const { data: post, error: postError, isLoading: postIsLoading } = useSWR(id ? [`/posts/${id}`] : null, fetcher);

    const deletePost = async (postId: number) => {
        await deleteMethod(`/posts/${postId}`, {
            method: 'DELETE',
        });
        mutate();
    };

    const addPost = async (title: string, description: string) => {
        await postMethod('/posts', { title, description });
        mutate();
    };

    return { posts: data, postsError: error, postsLoading: isLoading, post, postError, postIsLoading, deletePost, addPost };
};
