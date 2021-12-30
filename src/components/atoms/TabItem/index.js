import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  ICChat,
  ICChatActive,
  ICHome,
  ICHomeActive,
  ICHospital,
  ICHospitalActive,
} from '../../../assets';
import {colors} from '../../../utils/Colors';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Beranda') {
      return active? <ICHomeActive/> : <ICHome style={styles.icon}/>;
    }
    if (title === 'Pesan') {
      return active? <ICChatActive/> : <ICChat style={styles.icon}/>;
    }
    if (title === 'Rumah Sakit') {
      return active? <ICHospitalActive/> : <ICHospital style={styles.icon}/>;
    }
    return <ICHome />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
      <Icon/>
      {active  && 
        <Text style={styles.title}>{title}</Text>
      }
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: colors.secondary,
    paddingTop: 15
  },
  icon: {
    marginTop: 5
  },
  title: {
    color: colors.text.menuActive,
    fontSize: 12,
    fontFamily: 'Nunito-Bold',
    marginBottom: 10,
    marginTop: 3,
  },
});
