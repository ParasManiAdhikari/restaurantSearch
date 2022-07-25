import { Text, StyleSheet, View, Image} from "react-native"

export default function Card(props) {
    return (
        <View style={styles.container}>
            <Image source= {props.source} style={styles.image}/>
            <Text style={styles.font}>{props.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,   //container position
        marginHorizontal: 25,
        width: 80,    //container size
        height: 120,
        backgroundColor: 'orange',
        shadowColor: 'black',  //shadow
        elevation: 8,
        shadowOpacity: 0.5,
        borderRadius: 50,
        alignItems: 'center',  // centering
        justifyContent: 'center',
    },
    image: {
        width: 50,
        height: 50,
    },
    font:{
        color: 'white',
        fontWeight: 'bold',
    }
});