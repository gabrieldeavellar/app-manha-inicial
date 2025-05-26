import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
 
export default function NotFoundScreen() {
  return (
      <View style={styles.container}>
        <Text>Esta pagina nao existe</Text>
        <Text>404</Text>
        <Link href="/" style={styles.link}>
          <Text style={styles.linkPrincipal}>Clique aqui</Text>
        </Link>
          <Text >Para retornar a pagina principal</Text>
      </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkPrincipal:{
    color: "#335eec",
    fontSize: 30
  }
});