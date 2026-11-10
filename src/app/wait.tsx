
import { Link } from 'expo-router';
import { ImageBackground, StyleSheet, Text } from 'react-native';

export default function Wait() {
  return (
   <ImageBackground
  source={require('../../assets/images/gas.png')}
  style={styles.container}
  resizeMode="contain"
>
      <Text style={styles.title}>⛽ THE GAS STATION 🧟</Text>

      <Text style={styles.story}>
        You decide to wait until later to eat
        your snack and keep riding your pink moped.
      </Text>

      <Text style={styles.story}>
        Suddenly, you notice that your moped is
        running dangerously low on fuel!
        Luckily, you spot an abandoned gas station
        and pull over.
      </Text>

      <Text style={styles.story}>
        As you approach the gas pump, you realize
        you're completely defenseless if zombies
        show up while you're filling your tank.
      </Text>

      <Text style={styles.question}>
        What will you do?
      </Text>

      <Link href="/weapon" style={styles.button}>
        🔎 Look Inside for a Weapon
      </Link>

      <Link href="/gas" style={styles.button}>
        ⛽ Risk It and Fill Up
      </Link>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#e63946',
    textAlign: 'center',
    marginBottom: 30,
  },
  story: {
    fontSize: 18,
    color: '#eeeeee',
    textAlign: 'center',
    lineHeight: 27,
    marginBottom: 20,
  },
  question: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 10,
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#8b0000',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    marginBottom: 15,
    overflow: 'hidden',
  },
});
