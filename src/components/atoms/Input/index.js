import React, {useState}from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors } from '../../../utils/Colors'

const Input = ({label,placeholder}) => {
    const [focus, setFocus] = useState(false)
    return (
        <View>
            <Text style={styles.label(focus)}>{label}</Text>
            <TextInput style={styles.input(focus)} placeholder={placeholder} onFocus={ () => setFocus(true)} onBlur={()=>setFocus(false)}/>
        </View>
    )
}

export default Input 

const styles = StyleSheet.create({
    label: (focus) => ({
        fontFamily: 'Nunito-SemiBold',
        fontSize: 12,
        color: focus === true ? colors.input.focus.label : colors.input.blur.label,
        marginBottom: 5
    }),
    input: (focus) => ({
        borderWidth: 1,
        borderRadius: 5,
        borderColor: focus === true ? colors.input.focus.border : colors.input.blur.border,
        paddingVertical: 10,
        paddingHorizontal: 15,
        height: 35,
        fontSize: 12
    })
})
