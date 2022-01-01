import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {DummyDoctor1, ICNext, ICStar} from '../../../assets';
import {colors} from '../../../utils/Colors';

const ItemListDoctor = ({type, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Image source={DummyDoctor1} style={styles.img} />
      <View style={{flex: 1}}>
        <Text style={styles.name}>Name</Text>
        <Text style={styles.content}>Content</Text>
      </View>
      {type === 'listDoctor' && (
        <View style={styles.wrapperIcon}>
          <Image source={ICNext} style={styles.icon} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ItemListDoctor;

const styles = StyleSheet.create({
  container: type => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: type === 'listDoctor' ? 0 : 1,
    borderColor: type === 'listChat' ? colors.primary : null,
    backgroundColor: type === 'listDoctor' ? colors.secondary : colors.white,
  }),
  img: {
    width: 45,
    height: 45,
    marginRight: 20,
  },
  name: {
    fontSize: 14,
    color: colors.text.primaryGrey,
    fontFamily: 'Nunito-SemiBold',
  },
  content: {
    fontSize: 12,
    color: colors.text.greyLighter,
    fontFamily: 'Nunito-SemiBold',
    marginTop: 3,
  },
  wrapperIcon: {
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
});
