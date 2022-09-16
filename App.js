import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Image } from 'react-native';

export default function App() {

  const [keyWord, setKeyword] = React.useState('');
  const [recipes, setRecipes] = React.useState([]);

  const getRecipes = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${keyWord}`)
      .then(response => response.json())
      .then(data => setRecipes(data.meals))


  }


  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
          <View style={styles.listContainer}>
            <Image
            style={{width:200, height: 100}}
            source={{uri:`${item.strMealThumb}` }}           
            />        
            <Text>{item.strMeal}</Text>
           
          </View>}
        data={recipes}
      /> 

      <TextInput
        style={styles.input}
        placeholder='keyword'
        onChangeText={text => setKeyword(text)} />
      <Button title='Find' onPress={getRecipes} />


      <StatusBar style="auto" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

},
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 5

},
input: {
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    alignSelf:'flex-end'

},
buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    backgroundColor: '#fff',
    justifyContent: "space-between",
    alignContent: 'center',
    alignItems: 'center'
},
listContainer: {
    justifyContent: 'flex-start',
    flex: 1,
    marginTop: 20
},
boldText: {
    fontWeight: 'bold'
}
});
