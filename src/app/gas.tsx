
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Gas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛵 BACK ON THE ROAD ⛽</Text>

      <Text style={styles.story}>
        You quickly hop off your pink moped
        and stay alert while pumping gas.
        Luckily, no zombies appear!
      </Text>

      <Text style={styles.story}>
        You even have enough time to finally
        eat that granola bar you've been craving.
        With a full tank and a full stomach,
        you're feeling optimistic!
      </Text>

      <Text style={styles.story}>
        You hop back on your moped and start
        riding through the empty streets.
        Suddenly, you remember your friend Adi.
        He might still be somewhere in the city!
      </Text>

      <Text style={styles.question}>
        What will you do?
      </Text>

      <Link href="/adi" style={styles.button}>
        🔎 Look for Your Friend Adi
      </Link>

      <Link href="/continue" style={styles.button}>
        🛵 Keep Going on Your Way
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
