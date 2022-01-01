import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from '../../components'
import { colors } from '../../utils/Colors'

export default function Hospital() {
    return (
        <View style={styles.container}>
            <Header title="Rumah Sakit"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
})
