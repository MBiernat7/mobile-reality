import React from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';

import {usePostsStore} from '../store/store';
import {usePosts} from '../hooks/usePosts';
import {PostDetails} from '../components/PostDetails';

type Props = {
  navigation: any;
};

const PostScreen = ({navigation}: Props) => {
  const postId = usePostsStore(state => state.postId);
  const {postIsLoading} = usePosts({id: postId});

  return (
    <SafeAreaView style={styles.container}>
      {postIsLoading ? (
        <Text>Loading...</Text>
      ) : (
        <PostDetails navigation={navigation} />
      )}
    </SafeAreaView>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
