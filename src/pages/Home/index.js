import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  Homeprofile,
  DoctorCategory,
  RatedDoctor,
  Gap,
  NewsItem,
  MenuCategory,
} from '../../components';
import {colors} from '../../utils/Colors';

export default function Home() {
  return (
    <View style={styles.container}>
      <Homeprofile />
      <Gap height={35} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.title}>Apa yang kamu butuhkan?</Text>
          <View style={styles.scrollWrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.menuWrapped}>
                <Gap width={35}/>
                <MenuCategory title="Chat Dokter"/>
                <MenuCategory title="Cari Obat"/>
                <MenuCategory title="Cari Rumah Sakit / Klinik"/>
                <MenuCategory title="Vaksin Covid-19"/>
                <Gap width={35}/>
              </View>
            </ScrollView>
          </View>
          <Gap height={35} />
          <View style={styles.categoryTitle}>
            <Text style={styles.title}>Kategori Dokter</Text>
            <Text style={styles.all}>Lihat Semua</Text>
          </View>
          <View style={styles.categoryWrapped}>
            <DoctorCategory  title="Dokter Umum"/>
            <DoctorCategory  title="Dokter Gigi"/>
            <DoctorCategory  title="Dokter"/>
            <DoctorCategory  title="Dokter"/>
            <DoctorCategory  title="Dokter"/>
          </View>
          <Gap height={35} />
          <Text style={styles.title}>Dokter Terbaik</Text>
          <RatedDoctor name="Febyola Aldo" profession="Dokter Umum" />
          <RatedDoctor name="Januar Salman" profession="Dokter Gigi" />
          <RatedDoctor name="Faizah Pratiwi" profession="Dokter Kulit" />
          <Gap height={35} />
          <Text style={styles.title}>Baca Artikel</Text>
          <NewsItem title="Syarat Penerima Vaksin Covid-19, Apa Saja?" content=" Ada beberapa syarat yang harus..." />
          <NewsItem title="Beragam Penyebab Gusi Bengkak pada Anak dan Cara Mengatasinya" content="Terdapat beberapa gusi bengkak..." />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 35,
    backgroundColor: colors.white,
    marginBottom: 70
  },
  title: {
    fontSize: 16,
    color: colors.text.primaryGrey,
    fontFamily: 'Nunito-SemiBold',
    marginBottom: 10
  },
  menuWrapped: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  categoryWrapped: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  all: {
    fontSize: 12,
    color: colors.text.primaryGrey,
    fontFamily: 'Nunito-SemiBold',
  },
  scrollWrapper: {
    marginHorizontal: -35
  }
});
