import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogin} from '../../assets/illustration';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
import {colors} from '../../utils/Colors';
import { Header } from '../../components/molecules';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title='Masuk' onPress={()=>navigation.goBack()}/>
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <ILLogin />
        </View>
        <Gap height={50} />
        <Input label="Email" placeholder="Masukkan Email" />
        <Gap height={20} />
        <Input label="Password" placeholder="Masukkan Password" />
        <Gap height={40} />
        <Button title="Masuk" onPress={()=>navigation.replace('MainApp')}/>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  container: {
    paddingHorizontal: 50,
    paddingTop: 15
  }
});
