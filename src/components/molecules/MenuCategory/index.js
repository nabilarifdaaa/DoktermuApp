import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils/Colors';
import {DummyMenu1} from '../../../assets';

const MenuCategory = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={DummyMenu1} style={styles.icon} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    width: 95,
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  text: {
    color: colors.text.primaryGreen,
    fontSize: 12,
    fontFamily: 'Nunito-Bold',
    marginTop: 12,
  },
  icon: {
    width: 50,
    height: 50,
  },
});
