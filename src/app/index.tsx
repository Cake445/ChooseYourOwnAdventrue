import { Link } from 'expo-router';
import { ImageBackground, StyleSheet, Text } from 'react-native';

export default function Index() {
  return (
  <ImageBackground
  source={require('../../assets/images/cover.png')} 
  style={styles.container}
  resizeMode="cover"
>
  <Text style={styles.text}>THE OUTBREAK</Text>

  <Link href="/start" style={styles.button}>
    Start Story
  </Link>
</ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
 text: {
  color: '#fff',
  fontSize: 40,
  fontWeight: 'bold',
},
button: {
  fontSize: 20,
  color: '#fff',
  backgroundColor: 'darkred',
  padding: 15,
  borderRadius: 10,
  overflow: 'hidden',
},
});
