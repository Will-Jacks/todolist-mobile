import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../src/screens/HomeScreen";

const Stack = createStackNavigator();


export default function MyStack() {
    
    return(
        <Stack.Navigator>
            <Stack.Screen name="home" component={HomeScreen} options={{headerShown: false}}/>    
        </Stack.Navigator>
    );
}