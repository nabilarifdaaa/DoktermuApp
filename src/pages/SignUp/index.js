import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from '../../components/molecules';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
import Input from '../../components/atoms/Input';
import {colors} from '../../utils/Colors';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header hasBack={true} title="Daftar" onPress={()=>navigation.goBack()}/>
      <View style={styles.container}>
        <View style={styles.line} />
        <Gap height={40} />
        <Input label="Nama Lengkap" placeholder="Masukkan Nama Lengkap" />
        <Gap height={15} />
        <Input label="Email" placeholder="Masukkan Email" />
        <Gap height={15} />
        <Input label="No Telp" placeholder="Masukkan No Telp" />
        <Gap height={15} />
        <Input label="Tanggal Lahir" placeholder="Masukkan Tanggal Lahir" />
        <Gap height={15} />
        <Input label="Password" placeholder="Masukkan Password" />
        <Gap height={40} />
        <Button title="Selanjutnya" onPress={()=>navigation.navigate('UploadPhoto')} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white
  },
  container: {
    paddingHorizontal: 50,
  },
  line: {
    marginTop: 15,
    borderBottomWidth: 3,
    borderBottomColor: colors.primary,
    width: '40%',
  },
});
