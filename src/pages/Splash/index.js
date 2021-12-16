import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {ILSplash} from '../../assets/illustration';
import {Logo} from '../../components';
import { colors } from '../../utils/Colors';

const win = Dimensions.get('window');

const Splash = ({navigation}) => {
  useEffect(() => {
   setTimeout(()=>{
    navigation.replace('GetStarted')
   }, 3000)
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ILSplash />
      <Logo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Splash;
