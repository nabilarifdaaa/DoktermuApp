import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILGetStarted} from '../../assets/illustration';
import { Button, Gap, Logo } from '../../components';

const GetStarted = () => {
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
      <Button title="Daftar"/>
      <Gap height={15}/>
      <Button title="Login" type="secondary"/>
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
    marginHorizontal: 20
  },
  txtDesc: {
    color: '#727272',
    fontSize: 16,
  },
});
