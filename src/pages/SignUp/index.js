import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../../components/atoms/Button'
import Gap from '../../components/atoms/Gap'
import Input from '../../components/atoms/Input'
import Title from '../../components/atoms/Title'
import { colors } from '../../utils/Colors'

const SignUp = () => {
    return (
        <View style={styles.container}>
            <Title value='Daftar' />
            <View style={styles.line}/>
            <Gap height={40}/>
            <Input label='Nama Lengkap' placeholder='Masukkan Nama Lengkap' />
            <Gap height={15}/>
            <Input label='Email' placeholder='Masukkan Email' />
            <Gap height={15}/>
            <Input label='No Telp' placeholder='Masukkan No Telp' />
            <Gap height={15}/>
            <Input label='Tanggal Lahir' placeholder='Masukkan Tanggal Lahir' />
            <Gap height={15}/>
            <Input label='Password' placeholder='Masukkan Password' />
            <Gap height={40}/>
            <Button title='Daftar'/>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 50
    },
    line: {
        marginTop: 15,
        borderBottomWidth: 3,
        borderBottomColor: colors.primary,
        width: '40%'
    }
})
