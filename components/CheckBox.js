import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import Colors from "../constants/colors"


export function Checkbox({isChecked, onChecked, ...props}){

   return(
     <TouchableOpacity style={styles.checkbox} onPress={onChecked}>
        <Text style={{color:Colors.lightGray}}>

          {isChecked?"✓":""}
        </Text>
     </TouchableOpacity>
   )

}

const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    margin: 5,
    backgroundColor: "#fff0",
    color: Colors.lightGray,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: Colors.lightGray,
    alignItems: "center",
    justifyContent: "center",
  },
});
