
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Inside() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏚️ YOU FOUND ADI! 🧟</Text>

      <Text style={styles.story}>
        You cautiously step inside Adi's house,
        unsure of what you might find.
        Suddenly, you hear a noise coming
        from the laundry room...
      </Text>

      <Text style={styles.story}>
        You discover Adi hiding underneath
        a laundry hamper, scared out of his mind!
        He's so relieved to see you.
        After catching up, he decides
        to come with you to the safe house.
      </Text>

      <Text style={styles.story}>
        Adi hops onto the back of your pink
        moped, and you both speed off.
        But suddenly, you reach a crumbling
        bridge that looks ready to collapse!
      </Text>

      <Text style={styles.story}>
        You can see the safe house on the
        other side. Below you is the LA River,
        but it's completely dried up.
      </Text>

      <Text style={styles.question}>
        What will you and Adi do?
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
    marginBottom: 25,
  },
  story: {
    fontSize: 18,
    color: '#eeeeee',
    textAlign: 'center',
    lineHeight: 27,
    marginBottom: 18,
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
