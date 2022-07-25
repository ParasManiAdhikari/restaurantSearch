import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Searchbar from './src/components/Search';
import Card from './src/components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Searchbar />
      <View style={styles.flexrow}>
        <Card name="Burger" source={require("./src/assets/burger.png")} />
        <Card name="Cake" source={require("./src/assets/cake.png")} />
        <Card name="Smoothie" source={require("./src/assets/smoothies.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  flexrow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    marginLeft: 25,
  },
});
