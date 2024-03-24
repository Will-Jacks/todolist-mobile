import { createStackNavigator } from "@react-navigation/stack";
import { UserRegistrationProvider } from "../src/components/context/LoginContext.js";

import Login from "../src/screens/Login.js";
import TabNav from "./TabNav.js";
import UserRegistration from "../src/screens/UserRegistration.js";

const Stack = createStackNavigator();


export default function MyStack() {

    return (
        <UserRegistrationProvider>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={UserRegistration} options={{ headerShown: false }} />
                <Stack.Screen name="App" component={TabNav} options={{ headerShown: false }} />
            </Stack.Navigator>
        </UserRegistrationProvider>
    );
}