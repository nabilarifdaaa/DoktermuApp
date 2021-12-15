import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Button = ({type, title}) => {
  return (
    <View style={styles.container(type)}>
      <Text style={styles.text(type)}>{title}</Text>
    </View>
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
    fontWeight: 'bold',
  }),
});
