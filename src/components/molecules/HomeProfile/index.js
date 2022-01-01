import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyProfile} from '../../../assets';
import { colors } from '../../../utils/Colors';

export default function Homeprofile() {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>Halo,</Text>
        <Text style={styles.name}>Nabila Rifda</Text>
      </View>
      <Image source={DummyProfile} style={styles.photo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 35,
    paddingTop: 35
  },
  photo: {
    width: 65,
    height: 65,
  },
  textWrapper: {
    paddingTop: 10
  },
  title: {
      color: colors.text.primaryGrey,
      fontFamily: 'Nunito-SemiBold',
      fontSize: 16
  },
  name: {
    color: colors.text.primaryGrey,
    fontFamily: 'Nunito-Bold',
    fontSize: 16
  }
});
