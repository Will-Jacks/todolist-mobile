import { View, Text, TouchableOpacity, StyleSheet} from "react-native";


export default function UserScreen({navigation}) {

    function handlePress(){
        navigation.navigate('Login')
    }

    return(
        <View>
            <Text> User Screen</Text>

            <TouchableOpacity style={styles.TouchableOpacity} onPress={()=> handlePress()} >
                <Text>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    TouchableOpacity: {
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
})