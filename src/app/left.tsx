
import { Link } from 'expo-router';
import { ImageBackground, StyleSheet, Text } from 'react-native';

export default function Left() {
  return (
    <ImageBackground
  source={require('../../assets/images/moped.png')}
  style={styles.container}
  resizeMode="cover"
>
      <Text style={styles.title}>🛵 THE ESCAPE 🛵</Text>

      <Text style={styles.story}>
        You turn left and discover a pink,
        stylish moped with a matching helmet!
        You hop on and speed away from the zombies.
      </Text>

      <Text style={styles.story}>
        As you're riding through the empty streets,
        your stomach starts to growl.
        You realize you're starving!
      </Text>

      <Text style={styles.question}>
        What will you do?
      </Text>

      <Link href="/granola" style={styles.button}>
        🍫 Eat a Granola Bar
      </Link>

      <Link href="/wait" style={styles.button}>
        ⏳ Wait Until Later
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
    marginBottom: 35,
  },
  story: {
    fontSize: 19,
    color: '#eeeeee',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: 25,
  },
  question: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 15,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#8b0000',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
    borderRadius: 10,
    width: '85%',
    marginBottom: 15,
    overflow: 'hidden',
  },
});
