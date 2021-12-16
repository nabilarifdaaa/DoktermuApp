import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils/Colors';

const Title = ({value}) => {
  return (
    <View>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
    color: colors.text.primaryGreen,
  },
});
