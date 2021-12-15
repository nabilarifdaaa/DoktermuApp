import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {ILSplash} from '../../assets/illustration';
import { Logo } from '../../components';

const win = Dimensions.get('window');

const Splash = () => {
  return (
    <View style={styles.container}>
      <ILSplash/>
      <Logo/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gap: {
    marginBottom: 150,
  },
  logo: {
    backgroundColor: '#E0ECE4',
    padding: 10,
    borderRadius: 5,
    maxWidth: 131,
    marginBottom: 25,
  },
  txtLogo: {
    color: '#5C9970',
    fontWeight: 'bold',
    fontSize: 24,
  },
  txtDesc: {
    color: '#727272',
    fontSize: 16,
  },
});

export default Splash;
