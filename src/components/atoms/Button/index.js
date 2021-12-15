import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({type, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === 'secondary' ? 'white' : '#5C9970',
    borderColor:'#5C9970',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    height: 35,
    justifyContent: 'center',
  }),
  text: (type) => ({
    color: type === 'secondary' ? '#5C9970' : 'white',
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold'
  }),
});
