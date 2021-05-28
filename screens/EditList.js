import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, TextInput } from 'react-native';
import Colors from "../constants/colors"
import { CommonActions } from "@react-navigation/native"
import { ColorSelector } from "../components/ColorSelector";

const colorList = [
"blue",
"teal",
"green",
"olive",
"yellow",
"orange",
"red",
"pink",
"purple",
"blueGray",
];



export function EditList({ navigation, route }) {
  const [title, setTitle] = useState(route.params.title || "");
  const [color, setColor] = useState(route.params.color || Colors.blue)
  const [isValid, setIsValid] = useState(true);

  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.label}>
          List Name
         </Text>
        {!isValid && <Text style={{ color: Colors.red, fontSize: 12, marginLeft: 4 }}>*List name cannot be empty</Text>}
        <TextInput
          underlineColorAndroid={"transparent"}
          selectionColor={"transparent"}
          autoFocus={true}
          value={title}
          onChangeText={(text) => {
            setTitle(text)
            setIsValid(true)
          }}
          placeholder={"New list name"}

          maxLength={20}
          style={[styles.input, { outline: "none", fontSize: 16 }]}
        />

        <Text style={[styles.label,{marginTop:20}]}>
          Choose Color
         </Text>
         <ColorSelector 
           onSelect={(color) => {
            setColor(color)
            navigation.dispatch(CommonActions.setParams({color}))
           }}
           selectedColor={color}
           colorOptions={colorList}
         />
      </View>

      <TouchableOpacity onPress={() => {
        if (title.length > 1) {
          route.params.saveChanges({ title, color });
          navigation.dispatch(CommonActions.goBack());
        } else {
          setIsValid(false);
        }
      }} style={styles.saveButton}>
        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>Save</Text>
      </TouchableOpacity>

    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 5,
    justifyContent: "space-between",
  },
  input: {
    color: Colors.darkGray,
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 0.5,
    marginHorizontal: 5,
    padding: 3,
    height: 30,
    fontSize: 24,
  },
  saveButton: {
    borderRadius: 25,
    backgroundColor: Colors.darkGray,
    height: 48,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: Colors.black,
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
  },
});