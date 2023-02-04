import { StyleSheet, Text, View } from "react-native";
import { Link } from 'expo-router';

export default function Page() {

  const users = [
    {
      username: "Rokas",
      name: "Rokas Rudzianskas",
    },
    {
      username: "John",
      name: "John Doe",
    }
  ]
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Link style={{fontWeight: '600', marginVertical: 10}} href="/[username]?name=Rokas&username=Rudzianskas">Open Profile</Link>
        <Link style={{fontWeight: '600', marginVertical: 10}} href={{
          pathname: '/Rokas',
          params: {
            name: 'Rokas',
            surname: 'Rudzianskas'
          }
        }}>Open Profile #2</Link>

        {users.map((user, index) => (
          <Link key={index} href={`/${user.username}?name=${user.name}`}>Open {user.name} profile</Link>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
