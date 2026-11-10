
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Right() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧟 GAME OVER 🧟</Text>

      <Text style={styles.story}>
        You turn right and suddenly find yourself
        surrounded by a massive horde of zombies!
      </Text>

      <Text style={styles.story}>
        You try to escape, but it's too late.
        The zombies swarm you, and you become
        one of them!!!
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
    marginBottom: 35,
  },
  story: {
    fontSize: 19,
    color: '#eeeeee',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: 25,
  },
  end: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e63946',
    textAlign: 'center',
    marginVertical: 30,
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
