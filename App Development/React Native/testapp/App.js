import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const handleButtonPress = () => {
    console.warn('You pressed the button');
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Hello world React Native</Text>
      <Text>I love mobile app development with React Native</Text>
      <Button title='Press Here' color={'red'} onPress={handleButtonPress}>
      </Button>
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
