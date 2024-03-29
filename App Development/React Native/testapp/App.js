import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Counter } from './components/Counter';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Hello world React Native</Text>
      <Text>I love mobile app development with React Native</Text>
      <Text>{'\n'}</Text>
      <Counter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
