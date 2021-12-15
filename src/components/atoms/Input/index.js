import React, {useState}from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

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
        color: focus === true ? '#5C9970' : '#5B5B5B',
        marginBottom: 5
    }),
    input: (focus) => ({
        borderWidth: 1,
        borderRadius: 5,
        borderColor: focus === true ? '#5C9970' : '#727272',
        paddingVertical: 10,
        paddingHorizontal: 15,
        height: 35,
        fontSize: 12
    })
})
