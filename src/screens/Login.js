import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import AppHeader from "../components/AppHeader/AppHeader"
import { useState } from "react";


export default function Login({ navigation }) {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');


    async function post() {

        const jsonData = {
            user,
            password
        };

        const url = 'https://d031-2804-14d-be88-93f9-5966-2a6f-650c-74c7.ngrok-free.app/login';

        const headerOptions = {
            method: 'POST',
            headers: {

                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        };

        const response = await fetch(url, headerOptions);
        if (response.status === 200) {
            navigation.navigate('App')
        } else {
            Alert.alert(
                'Erro',
                'Usuário e/ou senha inválidos!'
            );
        }

    }

    function handleLoginPress() {
        post();
        console.log(user, password);

    }

    return (
        <View style={styles.container}>
            <AppHeader>To Do List</AppHeader>

            <Text>Usuário</Text>
            <TextInput style={styles.input}
                placeholder="Digite seu usuário"
                onChangeText={setUser} />

            <Text>Senha</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                textContentType="password"
                secureTextEntry={true}
                onChangeText={setPassword}
            />

            <TouchableOpacity
                style={styles.loginTouchableOpacity}
                onPress={() => handleLoginPress()}
            >
                <Text style={styles.loginText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgotPasswordContainer} >
                <Text style={styles.forgotPasswordText} >Esqueci minha senha</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.forgotPasswordContainer}
                onPress={() => navigation.navigate('Register')}
            >
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