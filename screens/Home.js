import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, } from 'react-native';
import Colors from "../constants/colors"
import { Ionicons } from '@expo/vector-icons'

const ListButton = ({ title, color, onPress, onDelete, onOptions }) => {
  return (
    <TouchableOpacity onPress={onPress}
      style={[styles.itemContainer, { backgroundColor: color }]}>
      <View>
        <Text style={styles.itemTitle}>
          {title}
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={onOptions}>
          <Ionicons name="options-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <Ionicons name="trash-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}


const renderAddListIcon = (navigation, addItemToLists) => {

  return (
    <TouchableOpacity onPress={() => { navigation.navigate("Edit List", { saveChanges: addItemToLists }) }}>
      <Text style={styles.icon}>+</Text>
    </TouchableOpacity>
  )

}




export function Home({ navigation }) {
  const [lists, setLists] = useState([
    { title: "School", color: Colors.red },
    { title: "Work", color: Colors.green },
    { title: "Fun", color: Colors.pink }
  ]);


  const updateItem = (index, item) => {
    lists[index] = item;
    setLists([...lists]);
  }

  const addItemToLists = (item) => {
    lists.push(item);
    setLists([...lists]);
  }


  const removeItemFromLists = (index) => {
    lists.splice(index, 1);
    setLists([...lists]);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => renderAddListIcon(navigation, addItemToLists)
    })
  })

  return (
    <View style={styles.container}>
      <FlatList data={lists}
        renderItem={({ item: { title, color }, index }) => {
          return (
            <ListButton
              title={title}
              color={color}
              navigation={navigation}
              onPress={() => { navigation.navigate("Todo List", { title, color }) }}
              onDelete={() => removeItemFromLists(index)}
              onOptions={() => { navigation.navigate("Edit List", { title, color, 
              saveChanges: (item) => updateItem(index, item) }) }}
            />
          )
        }
        } />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  itemTitle: { fontSize: 24, padding: 5, color: "white" },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    flex: 1,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15
  },
  icon: {
    padding: 5,
    fontSize: 24,
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});