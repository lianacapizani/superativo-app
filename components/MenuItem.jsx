import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../app/styles/colors';

export default function MenuItem({ icon, text, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ hovered, pressed }) => [
        styles.menuItem,
        hovered && { backgroundColor: Colors.neutral50 }, // hover
        pressed && { backgroundColor: Colors.neutral100 }, // clique
      ]}
    >
      {icon}
      <Text style={styles.menuText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16, // cobre toda a largura
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    borderRadius: 6,
  },
  menuText: {
    marginLeft: 15,
    fontSize: 16,
    fontFamily: "MontserratRegular",
    color: '#333',
  },
});
