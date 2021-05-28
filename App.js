import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import  { Home }  from "./screens/Home";
import { ToDoList } from "./screens/TodoList"
import { EditList } from "./screens/EditList";
import  Colors  from './constants/colors';
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
            headerTintColor: "white",

          })
        }}/>
        <Stack.Screen name="Edit List" component={EditList} 
        options={({route})=>{
          return({
            title: route.params.title? `Edit ${route.params.title} List`:"Create new list",
            headerStyle : {
              backgroundColor: route.params.color || Colors.blue
            },
            headerTintColor: "white"
          })
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

