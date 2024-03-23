import { View, Text, StyleSheet } from "react-native"

export default function Login() {


    return(
        <View style={styles.container}>
            <Text>Olá, mundo!</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        fontSize: 24
    }
})