import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Searchbar from './src/components/Search';
import Card from './src/components/Card';
import { ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Searchbar />
      <ScrollView scrollEnabled horizontal>
        <Card name="Burger" source={require("./src/assets/burger.png")} />
        <Card name="Cake" source={require("./src/assets/cake.png")} />
        <Card name="Pasta" source={require("./src/assets/pasta.png")} />
        <Card name="Pizza" source={require("./src/assets/pizza.png")} />
        <Card name="Smoothie" source={require("./src/assets/smoothies.png")} />
        <Card name="Steak" source={require("./src/assets/steak.png")} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  text: {
    color: 'white',
    marginLeft: 25,
  },
});
