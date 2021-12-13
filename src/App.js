import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome App JS</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
})
