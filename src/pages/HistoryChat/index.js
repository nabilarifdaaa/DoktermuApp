import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, Header} from '../../components';
import ItemListDoctor from '../../components/molecules/ItemListDoctor';
import {colors} from '../../utils/Colors';

const HistoryChat = () => {
  return (
    <View style={styles.container}>
      <Header title="Riwayat Pesan" />
      <Gap height={40} />
      <View style={styles.contentWrapper}>
        <ItemListDoctor type="listDoctor" />
        <ItemListDoctor type="listChat" />
        <ItemListDoctor type="listChat" />
        <ItemListDoctor type="listChat" />
      </View>
    </View>
  );
};

export default HistoryChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentWrapper: {
    paddingHorizontal: 35,
  },
});
