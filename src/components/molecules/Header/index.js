import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils/Colors';
import Button from '../../atoms/Button';

const Header = ({title, onPress, hasBack}) => {
  return (
    <View style={styles.container}>
      {hasBack && <Button type="icon-only" icon="back-green" onPress={onPress} />}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
    color: colors.text.primaryGreen,
    marginLeft: 12,
  },
});
