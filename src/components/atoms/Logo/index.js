import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Logo() {
  return (
    <View style={styles.logo}>
      <Text style={styles.txtLogo}>Doktermu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    backgroundColor: '#E0ECE4',
    padding: 10,
    borderRadius: 5,
    maxWidth: 131,
    marginBottom: 25,
  },
  txtLogo: {
    color: '#5C9970',
    fontFamily: 'Nunito-Bold',
    fontSize: 24,
  },
});
