
import { Link } from 'expo-router';
import { ImageBackground, StyleSheet, Text } from 'react-native';

export default function Adi() {
  return (
    <ImageBackground
      source={require('../../assets/images/house.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <Text style={styles.title}>🏚️ ADI'S HOUSE 🧟</Text>

      <Text style={styles.story}>
        You remember that your friend Adi
        lives close to the gas station,
        so you decide to look for him.
      </Text>

      <Text style={styles.story}>
        You ride your pink moped through
        the quiet streets until you finally
        reach his house.
      </Text>

      <Text style={styles.story}>
        As you approach the front door,
        you notice something strange...
        the door is wide open!
        You have no idea if Adi is inside
        or if zombies have already found him.
      </Text>

      <Text style={styles.question}>
        What will you do?
      </Text>

      <Link href="/inside" style={styles.button}>
        🚪 Go Inside
      </Link>

      <Link href="/continue" style={styles.button}>
        🛵 Keep Going on Your Way
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
