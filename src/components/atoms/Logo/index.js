import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { colors } from '../../../utils/Colors';

export default function Logo() {
  return (
    <View style={styles.logo}>
      <Text style={styles.txtLogo}>Doktermu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 5,
    maxWidth: 131,
    marginBottom: 25,
  },
  txtLogo: {
    color: colors.text.primaryGreen,
    fontFamily: 'Nunito-Bold',
    fontSize: 24,
  },
});
