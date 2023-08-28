import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {usePostsStore} from '../store/store';
import {usePosts} from '../hooks/usePosts';

type Props = {
  item: {
    item: {title: string; description: string; id: number; createdAt: string};
  };
  navigation: any;
};

export const Post = ({navigation, item}: Props) => {
  const {deletePost} = usePosts({});
  const selectPost = usePostsStore(state => state.selectPostId);

  const navigateToPost = (id: number) => {
    selectPost(id);
    navigation.navigate('Post');
  };

  return (
    <View className="flex flex-row gap-6">
      <View className="flex gap-2 items-center">
        <Text>{item.item.title}</Text>
        <Text>{item.item.description}</Text>
      </View>
      <View className="flex flex-row items-center gap-2">
        <TouchableOpacity onPress={() => deletePost(item.item.id)}>
          <Text>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToPost(+item.item.id)}>
          <Text> Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
