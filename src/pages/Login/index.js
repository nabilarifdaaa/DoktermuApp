import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogin} from '../../assets/illustration';
import Input from '../../components/atoms/Input';
import Title from '../../components/atoms/Title';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
import {colors} from '../../utils/Colors';

export default function index() {
  return (
    <View style={styles.container}>
      <Title value="Masuk" />
      <View style={{alignItems: 'center'}}>
        <ILLogin />
      </View>
      <Gap height={50} />
      <Input label="Email" placeholder="Masukkan Email" />
      <Gap height={20} />
      <Input label="Password" placeholder="Masukkan Password" />
      <Gap height={40} />
      <Button title="Masuk" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 50,
  },
});
