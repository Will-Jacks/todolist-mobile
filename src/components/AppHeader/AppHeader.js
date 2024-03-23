import { View, Text, StyleSheet } from "react-native";


export default function AppHeader({ children }) {

    return (
        <View style={styles.containerHeader} >
            <Text style={styles.title}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: "bold",
        alignSelf: "center"
    },
    containerHeader: {
        marginTop: '30%',
        width: "100%",
        marginBottom: "30%"
    },
});