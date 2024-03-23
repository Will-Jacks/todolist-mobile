import { createStackNavigator } from "@react-navigation/stack";
import Login from "../src/screens/Login.js";
import HomeScreen from "../src/screens/HomeScreen.js";
import UserRegistration from "../src/screens/UserRegistration.js";
import { UserRegistrationProvider } from "../src/components/context/LoginContext.js";
const Stack = createStackNavigator();


export default function MyStack() {
    
    return(
        <UserRegistrationProvider>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={UserRegistration} options={{headerShown: false}}/>
            </Stack.Navigator>
        </UserRegistrationProvider>
    );
}