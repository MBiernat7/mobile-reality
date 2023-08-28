import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
} from 'react-native';

export const Grid = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/house.jpg')}
        style={styles.image}
      />
      <Image
        source={require('../../assets/images/wood.jpg')}
        style={styles.image}
      />
      <Image
        source={require('../../assets/images/family.jpg')}
        style={styles.image}
      />
      <View style={styles.lastImageContainer}>
        <ImageBackground
          source={require('../../assets/images/keys.jpg')}
          style={styles.image}
        />
        <Text style={styles.text}>
          gdy stawałem się dorosłym człowiekiem, ciągle słyszałem głos Dziadka
          mówiącego o Domu przyjaźni i miłości. Cały czas obraz ten kojarzy mi
          się z drewnianym ciepłym Domem krytym strzechą. Domem który był,
          Domem, który miał duszę
        </Text>
        <View style={styles.blueCover} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    height: Dimensions.get('window').width / 2,
    width: Dimensions.get('window').width / 2,
  },
  lastImageContainer: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueCover: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: Dimensions.get('window').width / 2,
    width: Dimensions.get('window').width / 2,
    backgroundColor: 'rgba(4, 146, 194, 0.786)',
    zIndex: 1,
    elevation: 1,
  },
  text: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontSize: 9,
    textAlign: 'center',
    zIndex: 2,
    elevation: 2,
  },
});
