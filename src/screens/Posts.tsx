import React from 'react';
import {
  FlatList,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {usePosts} from '../hooks/usePosts';
import {Post} from '../components/Post';

type Props = {navigation: any};

const PostsScreen = ({navigation}: Props) => {
  const {posts, postsLoading} = usePosts({});

  return (
    <SafeAreaView style={styles.container}>
      {postsLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={posts}
          renderItem={item => <Post item={item} navigation={navigation} />}
          keyExtractor={item => item.id.toString()}
        />
      )}

      <TouchableOpacity onPress={() => navigation.navigate('Add Post')}>
        <Text>Add Post</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
