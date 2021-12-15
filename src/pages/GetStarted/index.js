import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILGetStarted} from '../../assets/illustration';
import { Button, Gap, Logo } from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Logo/>
        <Text style={styles.txtDesc}>
          Konsultasi dengan dokter jadi lebih mudah dan fleksibel
        </Text>
      </View>
      <Gap height={40}/>
      <ILGetStarted />
      <Gap height={60}/>
      <Button title="Daftar" onPress={()=>navigation.navigate('SignUp')}/>
      <Gap height={15}/>
      <Button title="Login" type="secondary" onPress={()=>navigation.navigate('Login')}/>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  txtDesc: {
    color: '#727272',
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold'
  },
});
