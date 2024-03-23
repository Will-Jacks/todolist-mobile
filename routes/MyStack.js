import { createStackNavigator } from "@react-navigation/stack";
import Login from "../src/screens/Login.js";
import HomeScreen from "../src/screens/HomeScreen.js";
const Stack = createStackNavigator();


export default function MyStack() {
    
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>    
        </Stack.Navigator>
    );
}