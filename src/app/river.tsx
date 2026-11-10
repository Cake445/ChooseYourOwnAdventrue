
import { Link } from 'expo-router';
import { ImageBackground, StyleSheet, Text } from 'react-native';

export default function River() {
  return (
    <ImageBackground
      source={require('../../assets/images/safe.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <Text style={styles.title}>🎉 YOU SURVIVED! 🎉</Text>

      <Text style={styles.story}>
        You decide not to risk crossing the
        crumbling bridge. Instead, you get
        off your pink moped and carefully
        climb down into the dried-up LA River.
      </Text>

      <Text style={styles.story}>
        You make your way through the empty
        riverbed, staying alert for zombies.
        After a long walk, you finally
        reach the other side!
      </Text>

      <Text style={styles.story}>
        You run toward the safe house,
        and the guards quickly open
        the gates to let you inside!
      </Text>

      <Text style={styles.end}>
        🏠 YOU MADE IT TO THE SAFE HOUSE!!! 🏠
      </Text>

      <Text style={styles.win}>
        CONGRATULATIONS! YOU SURVIVED! 🥳
      </Text>

      <Link href="/start" style={styles.button}>
        🔄 Play Again
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
    fontSize: 34,
    fontWeight: 'bold',
    color: '#4ade80',
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
    color: '#4ade80',
    textAlign: 'center',
    marginVertical: 20,
  },
  win: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#15803d',
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
