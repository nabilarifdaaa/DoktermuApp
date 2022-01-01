import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyArtikel1} from '../../../assets';
import {colors} from '../../../utils/Colors';

const NewsItem = ({title, content}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
      <Image source={DummyArtikel1} style={styles.img} />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  title: {
    fontSize: 12,
    fontFamily: 'Nunito-SemiBold',
    color: colors.text.primaryGrey,
    maxWidth: 155,
    marginTop: 8
  },
  content: {
    fontSize: 10,
    fontFamily: 'Nunito-SemiBold',
    color: colors.text.greyLighter,
    marginTop: 5
  },
  img: {
    width: 124,
    height: 74,
    borderRadius: 5,
  },
});
