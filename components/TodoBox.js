import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, TextInput } from 'react-native';
import Colors from "../constants/colors"
import { Checkbox } from "./CheckBox";

const EditableText = ({text, onChangeText,isChecked, isNewItem}) => {
  const [isEditMode, setEditMode] = useState(isNewItem);
  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={() => !isChecked && setEditMode(true)} >
      {isEditMode ?
        <TextInput
          underlineColorAndroid={"transparent"}
          selectionColor={"transparent"}
          autoFocus={true}
          value={text}
          onChangeText={onChangeText}
          placeholder={"Add new item here"}
          onSubmitEditing={() => { }}
          maxLength={20}
          style={[styles.input, { outline: "none", fontSize:16 }]}
          onBlur={() => { setEditMode(false) }}
        /> :
        <Text style={[styles.text,
        { color: isChecked ? Colors.lightGray : Colors.black, textDecoration: isChecked ? "line-through" : "none" }]}>
          {text}
        </Text>
      }
    </TouchableOpacity>

  )

}


export function TodoBox({ text, isChecked, onChecked, onChangeText, onDelete, isNewItem }) {
  
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <Checkbox isChecked={isChecked} onChecked={onChecked} />
        <EditableText text={text} onChangeText={onChangeText} isChecked={isChecked}isNewItem={isNewItem}/>
      </View>

     <TouchableOpacity onPress={onDelete}>
       <Text style={[styles.icon, {color:Colors.red}]}>X</Text>
     </TouchableOpacity>

    </View>
  )

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10
  },
  icon: {
    padding: 5,
    fontSize: 16,
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
  text: {
    padding: 3,
    fontSize: 18,
  }
})