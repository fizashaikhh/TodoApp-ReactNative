import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import  { Home }  from "./screens/Home";
import { ToDoList } from "./screens/TodoList"

const Stack = createStackNavigator();





export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Fire App" component={Home}/>
        <Stack.Screen name="Todo List" component={ToDoList} 
        options={({route})=>{
          return({
            title: route.params.title,
            headerStyle : {
              backgroundColor: route.params.color
            },
            headerTintColor: "white"
          })
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

