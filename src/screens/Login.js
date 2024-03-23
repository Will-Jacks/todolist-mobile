import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import AppHeader from "../components/AppHeader/AppHeader"


export default function Login() {

    

    return (
        <View style={styles.container}>
            <AppHeader>To Do List</AppHeader>

            <Text>Usuário</Text>
            <TextInput style={styles.input} placeholder="Digite seu usuário" />

            <Text>Senha</Text>
            <TextInput style={styles.input} placeholder="Digite sua senha" textContentType="password" secureTextEntry={true} />

            <TouchableOpacity style={styles.loginTouchableOpacity}>
                <Text style={styles.loginText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgotPasswordContainer} >
                <Text style={styles.forgotPasswordText} >Esqueci minha senha</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgotPasswordContainer} >
                <Text style={styles.forgotPasswordText} >Crie sua conta</Text>
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