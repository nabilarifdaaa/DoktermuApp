import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../utils/Colors';

const Link = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: {
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
    color: colors.text.primaryGreen,
  },
});
