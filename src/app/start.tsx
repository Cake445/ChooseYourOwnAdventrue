
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Start() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧟 ZOMBIE APOCALYPSE</Text>

      <Text style={styles.story}>
        The city has been overrun by zombies.
        Your only chance of survival is to reach
        the safe house across town.
      </Text>

      <Text style={styles.story}>
        As you run through the empty streets,
        you reach a junction.
        You hear zombies approaching behind you.
      </Text>

      <Text style={styles.question}>
        Which way will you go?
      </Text>

      <Link href="/left" style={styles.button}>
        ⬅ Go Left
      </Link>

      <Link href="/right" style={styles.button}>
        Go Right ➡
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
    fontSize: 30,
    fontWeight: 'bold',
    color: '#e63946',
    textAlign: 'center',
    marginBottom: 35,
  },
  story: {
    fontSize: 18,
    color: '#eeeeee',
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 20,
  },
  question: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 20,
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
