import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {usePosts} from '../hooks/usePosts';
import {format} from 'date-fns';

type Props = {navigation: any};

export const PostDetails = ({navigation}: Props) => {
  const {deletePost, post} = usePosts({});

  const formatDate = (string: string) => {
    const date = new Date(string);

    return format(date, 'MMMM do, yyyy H:mma');
  };

  return (
    <View>
      <Text>Created: {formatDate(post.createdAt)}</Text>
      <Text>Title: {post.title}</Text>
      <Text>Description: {post.description}</Text>

      <TouchableOpacity
        onPress={() => {
          deletePost(post.id);
          navigation.navigate('Posts');
        }}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};
