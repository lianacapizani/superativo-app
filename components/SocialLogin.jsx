import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Typography from '../app/styles/typography';

const SocialLogin = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ou faça login com:</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.6}>
          <FontAwesome5 name="google" size={24} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.6}>
          <FontAwesome5 name="facebook" size={24} color="#1877F2" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.6}>
          <FontAwesome5 name="whatsapp" size={24} color="#25D366" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 14,
    color: '#4E4E4E',
    marginBottom: 10,
    fontFamily: Typography.regular,
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  iconButton: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 50,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});
