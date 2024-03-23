import { NavigationContainer } from '@react-navigation/native';
import MyStack from './routes/MyStack.js';
import { StatusBar } from 'expo-status-bar';



export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='dark' />
      <MyStack />
    </NavigationContainer>
  );
}