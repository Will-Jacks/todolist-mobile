import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useUserRegistrationContext } from "../components/context/LoginContext";
import AppHeader from '../components/AppHeader/AppHeader';
export default function UserRegistration() {

    const { userLogin, setUserLogin, userPassword, setUserPassword, username, setUsername, email, setEmail, userRegister } = useUserRegistrationContext();

    const handleUserRegistration = () => {
        userRegister();
        setUserLogin('')
        setUserPassword('')
        setUsername('')
        setEmail('')
    }

    return (
        <View style={styles.container}>
            <AppHeader>Cadastre-se</AppHeader>

            <Text>Nome</Text>
            <TextInput style={styles.input} placeholder="Digite seu nome" value={username} onChangeText={(e) => setUsername(e)} />

            <Text>Email</Text>
            <TextInput style={styles.input} placeholder="exemplo@exemplo.com" value={email} onChangeText={(e) => setEmail(e)} />

            <Text>Login</Text>
            <TextInput style={styles.input} placeholder="Digite seu usuário" value={userLogin} onChangeText={(e) => setUserLogin(e)} />

            <Text>Senha</Text>
            <TextInput style={styles.input} placeholder="Digite sua senha" textContentType="password" secureTextEntry={true} value={userPassword} onChangeText={(e) => setUserPassword(e)} />


            <TouchableOpacity style={styles.loginTouchableOpacity} onPress={() => handleUserRegistration()}>
                <Text style={styles.loginText}>Cadastrar</Text>
            </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        fontSize: 24

    },
    input: {
        height: 50,
        width: "80%",
        margin: 12,
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
    },
    loginTouchableOpacity: {
        height: 30,
        width: "40%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "gray",
        backgroundColor: "gray",
        borderRadius: 6,
        marginTop: 20
    },
    loginText: {
        color: 'white'
    },
    forgotPasswordContainer: {
        marginTop: 20
    },
    forgotPasswordText: {
        color: 'blue',
        /* borderBottomWidth: 1,
        borderBottomColor: 'blue', */
        textDecorationLine: "underline"
    }
})