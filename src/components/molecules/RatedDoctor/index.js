import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyDoctor1, ICStar} from '../../../assets';
import {colors} from '../../../utils/Colors';

const RatedDoctor = ({name, profession}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapped}>
        <Image source={DummyDoctor1} style={styles.img} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{profession}</Text>
        </View>
      </View>
      <View style={styles.wrapped}>
        <Image source={ICStar} style={styles.iconStar} />
        <Image source={ICStar} style={styles.iconStar} />
        <Image source={ICStar} style={styles.iconStar} />
      </View>
    </View>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  wrapped: {
    flexDirection: 'row',
  },
  img: {
    width: 45,
    height: 45,
    marginRight: 20
  },
  name: {
    fontSize: 14,
    color: colors.text.primaryGrey,
    fontFamily: 'Nunito-SemiBold',
  },
  profession: {
    fontSize: 12,
    color: colors.text.greyLighter,
    fontFamily: 'Nunito-SemiBold',
    marginTop: 3
  },
  iconStar: {
    width: 16,
    height: 16,
    marginTop: 10,
    marginRight: 3
  },
});
