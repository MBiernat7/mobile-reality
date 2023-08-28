import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = {
  navigation: any;
  title: string;
  subtitle: string;
};

export const Shared = ({navigation, title, subtitle}: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <View style={styles.paragraphContainer}>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          corrupti sint earum non ipsa accusamus explicabo eveniet voluptas
          porro, facere nemo? Ullam incidunt, aperiam soluta eligendi assumenda
          ut quibusdam similique. Tenetur nulla, eos non provident id maxime
          consequatur consequuntur explicabo voluptatum repudiandae repellendus
          deserunt molestiae autem dolorum voluptatibus sint, ab atque quis
          omnis laudantium sed. Provident sapiente nobis vel laudantium? saepe!
        </Text>
        <Text style={styles.paragraph}>
          Temporibus aliquam totam ex enim deleniti, consequatur ut sequi,
          maiores nulla natus quam ea, nisi magnam. Quo ratione laudantium,
          ducimus, aperiam est delectus cupiditate ex quaerat voluptas sunt
          aliquid eaque. Optio delectus deserunt iste deleniti amet incidunt!
          Autem ea sapiente perferendis soluta quos, nam dolore dolor. Suscipit
          itaque totam nisi odit. Ratione cupiditate ipsam, culpa quae officia
          praesentium laudantium quod! Delectus fugit, incidunt rem at sequi
          veritatis numquam consectetur expedita illo, est adipisci! Dignissimos
          ullam magni nihil ad culpa velit doloremque dolorem aspernatur
          repellat, modi delectus eos dolore in
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Posts')}
        style={styles.button}>
        <Text style={styles.buttonText}>Zobacz więcej</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 38.2,
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  title: {
    fontSize: 30,
    color: '#000',
    textAlign: 'center',
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 18,
    color: '#0492C2',
    textAlign: 'center',
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#0492C2',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
  },
  buttonText: {
    color: '#0492C2',
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  paragraphContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 23.6,
  },
  paragraph: {
    textAlign: 'center',
  },
});
