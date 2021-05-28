import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import Colors from "../constants/colors"
import { Ionicons } from '@expo/vector-icons'
import { TodoBox } from '../components/TodoBox'

const renderAddListIcon = (addItem) => {

  return(
    <TouchableOpacity onPress={() => addItem({text:"", isChecked:false, isNewItem: true}) }>
      <Text style={styles.icon}>+</Text>
    </TouchableOpacity>
  )
 
}



export function ToDoList({navigation}) {

  const [todoItems, setTodoItems] = useState([{ text: "hello", isChecked: false  }])

  const addItemToLists = (item) => {
    todoItems.push(item);
    setTodoItems([...todoItems]);
  }


  const removeItemFromLists = (index) => {
    todoItems.splice(index, 1);
    setTodoItems([...todoItems]);
  }

  const updateItem = (index, item) => {
    todoItems[index] = item;
    setTodoItems([...todoItems]);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => renderAddListIcon(addItemToLists)
    })
  })





  return (
    <View style={styles.container}>
      <FlatList
        data={todoItems}
        renderItem={
          ({item:{ text, isChecked, isNewItem}, index}) => {

            return (
              <TodoBox 
              text={text} 
              isChecked={isChecked} 
              isNewItem={isNewItem}
              onChecked={() => {
                const todoItem = todoItems[index];
                todoItem.isChecked = !isChecked;
                updateItem(index, todoItem);
              }}
              onChangeText={(newText) => {
              const todoItem = todoItems[index];
              todoItem.text = newText;
              updateItem(index,todoItem)
              }}

              onDelete = {() => {
                removeItemFromLists(index)
              }}
              />
            )
          }
        }
      />
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