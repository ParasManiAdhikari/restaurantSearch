import { Text, StyleSheet, View, TextInput} from "react-native"
import { FontAwesome, Ionicons } from "@expo/vector-icons"

export default function Searchbar() {
    return (
        <View style={styles.container}>
            <Ionicons name="ios-search-sharp" size={23} color="black" />
            <TextInput style={styles.input} placeholder="Meal, Recipes" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        flexDirection: 'row',
        backgroundColor: 'orange',
        shadowColor: 'black',
        elevation: 50,
        shadowOpacity: 0.5,
        padding: 6,
        borderRadius: 10
    },
    input: {
        marginLeft: 8,
    }
});