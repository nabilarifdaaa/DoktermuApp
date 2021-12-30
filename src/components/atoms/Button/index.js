import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../utils/Colors';
import IconOnly from './IconOnly';

const Button = ({type, title, onPress, icon}) => {
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress}/>;
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    borderColor: colors.button.border,
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    height: 35,
    justifyContent: 'center',
  }),
  text: type => ({
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
  }),
});
