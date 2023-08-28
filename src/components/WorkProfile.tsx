import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  View,
  Text,
} from 'react-native';

export const WorkProfile = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/building.jpg')}
        style={styles.image}
      />

      <View style={styles.offersTextContainer}>
        <Text style={styles.text}>budowa domów z drewna</Text>
        <Text style={styles.text}>budowa bram wjazdowych</Text>
        <Text style={styles.text}>wykończenie wnętrz</Text>
        <Text style={styles.text}>altany ogrodowe</Text>
        <Text style={styles.text}>kamienne elementy architektury</Text>
        <Text style={styles.text}>remonty</Text>
      </View>

      <View style={styles.blueCover} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').width,
  },
  blueCover: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').width,
    backgroundColor: 'rgba(4, 146, 194, 0.786)',
    zIndex: 1,
    elevation: 1,
  },
  offersTextContainer: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    elevation: 2,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
