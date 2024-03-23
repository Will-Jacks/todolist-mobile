import { createStackNavigator } from "@react-navigation/stack";
import Login from "../src/screens/Login.js";

const Stack = createStackNavigator();


export default function MyStack() {
    
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>    
        </Stack.Navigator>
    );
}