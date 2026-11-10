
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Weapon() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>💀 GAME OVER 💀</Text>

      <Text style={styles.story}>
        You quietly sneak inside the abandoned
        gas station, hoping to find a weapon
        to protect yourself from the zombies.
      </Text>

      <Text style={styles.story}>
        As you're creeping through the aisles,
        you don't notice the gas station clerk
        hiding behind the counter...
      </Text>

      <Text style={styles.story}>
        Suddenly, the clerk, who has turned
        into a zombie, sneaks up behind you!
        Before you can react, he attacks
        and eats you!!! 🧟
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
