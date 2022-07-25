import { Text, StyleSheet, View } from "react-native"

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.thinText}>Search your</Text>
            <Text style={styles.boldText}>perfect Meal!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        marginLeft: 25,
    },
    thinText: {
        color: 'black',
        fontSize: 30,
    },
    boldText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 40,
    },
});