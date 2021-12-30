import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ICAdd, ILNullPhoto} from '../../assets';
import {Gap, Link} from '../../components/atoms';
import Button from '../../components/atoms/Button';
import {Header} from '../../components/molecules';
import {colors} from '../../utils/Colors';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Unggah Foto" onPress={()=>navigation.goBack()}/>
        <View style={styles.content}>
          <View style={styles.profile}>
            <View style={styles.avatarWrapper}>
              <Image source={ILNullPhoto} style={styles.avatar}></Image>
              <ICAdd style={styles.addIcon} />
            </View>
            <Gap height={40} />
            <Text style={styles.name}>Nabila Rifda R.</Text>
            <Gap height={15} />
            <Text style={styles.email}>nabilarifdaaa@gmail.com</Text>
          </View>
          <View>
            <Button title="Unggah Foto" />
            <Gap height={25} />
            <Link title="Lewati" />
          </View>
        </View>
    </View>
  );
}

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 50,
    flex: 1,
    justifyContent: 'space-between'
  },
  profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarWrapper: {
    width: 118,
    height: 118,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 118 / 2,
    padding: 9.83,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 98.33,
    height: 98.33,
  },
  addIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  name: {
    fontSize: 24,
    color: colors.text.secondaryGrey,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  email: {
    fontSize: 12,
    color: colors.text.secondaryGrey,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
