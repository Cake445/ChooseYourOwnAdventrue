
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Granola() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>💀 GAME OVER 💀</Text>

      <Text style={styles.story}>
        You reach into your bag to grab a granola
        bar while riding your pink moped.
      </Text>

      <Text style={styles.story}>
        Suddenly, you lose your balance and
        crash! You hit your head and get
        knocked unconscious.
      </Text>

      <Text style={styles.story}>
        When you finally wake up, you realize
        you're surrounded by zombies...
        and they're eating you!!! 🧟
      </Text>

      <Text style={styles.end}>
        YOU DID NOT SURVIVE 💀
      </Text>

      <Link href="/start" style={styles.button}>
        🔄 Try Again
      </Link>
    </View>
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
    fontSize: 36,
    fontWeight: 'bold',
    color: '#e63946',
    textAlign: 'center',
    marginBottom: 30,
  },
  story: {
    fontSize: 19,
    color: '#eeeeee',
    textAlign: 'center',
    lineHeight: 29,
    marginBottom: 20,
  },
  end: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e63946',
    textAlign: 'center',
    marginVertical: 25,
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
    overflow: 'hidden',
  },
});
