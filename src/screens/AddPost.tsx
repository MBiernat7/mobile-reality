import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Form} from '../components/Form';

const AddPostScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Form />
    </SafeAreaView>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
