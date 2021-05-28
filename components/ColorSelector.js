import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, TextInput } from 'react-native';
import { color } from 'react-native-reanimated';
import Colors from "../constants/colors"


const ColorButton = ({ onPress,color, isSelected }) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.colorButton, { borderWidth: isSelected ? 3 : 0, backgroundColor: color }
      ]}
    />
  )
}

export function ColorSelector({ selectedColor, colorOptions, onSelect }) {

  return (
    <View style={styles.container}>
      {colorOptions.map((colorName) => {
        return (
        <ColorButton
          onPress={() => onSelect(Colors[colorName])}
          color={Colors[colorName]}
          isSelected={Colors[colorName] == selectedColor}
        />
        )
      })}
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 5,
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center"
  },
  colorButton: {
    height: 32,
    width: 32,
    borderColor: Colors.lightGray,
    borderRadius: 24,
    margin: 10,
  }
})