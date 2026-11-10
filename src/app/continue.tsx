
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Continue() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌉 THE FINAL CROSSING 🧟</Text>

      <Text style={styles.story}>
        You decide to keep going and ride
        your pink moped toward the safe house.
        You're getting closer to safety!
      </Text>

      <Text style={styles.story}>
        Suddenly, you come across an old,
        crumbling bridge that looks like
        it could collapse at any moment.
      </Text>

      <Text style={styles.story}>
        On the other side, you can finally
        see the safe house! Below the bridge
        is the LA River, but it's completely
        dried up.
      </Text>

      <Text style={styles.question}>
        How will you get across?
      </Text>

      <Link href="/bridge" style={styles.button}>
        🛵 Send It Over the Bridge
      </Link>

      <Link href="/river" style={styles.button}>
        🏞️ Walk Through the LA River
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
