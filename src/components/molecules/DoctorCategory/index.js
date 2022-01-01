import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {DummyCategory1} from '../../../assets/dummy';
import {colors} from '../../../utils/Colors';

const DoctorCategory = ({title,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={DummyCategory1} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: 45,
    backgroundColor: colors.light,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  title: {
      fontSize: 11,
      color: colors.text.grey3,
      maxWidth: 45,
      textAlign: 'center',
      marginTop: 5
  }
});
