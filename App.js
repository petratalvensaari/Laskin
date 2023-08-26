import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Alert } from 'react-native';

export default function App() {
  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(0);
  const [result, setResult] = useState(0);

  const calculate = (operator) => {
    if (isNaN(parseFloat(numA)) || isNaN(parseFloat(numB))) {
      Alert.alert('Warning', "Type a number first");
    }
    else {
      if (operator === '+')
        setResult(parseFloat(numA) + parseFloat(numB));
      else
        setResult(parseFloat(numA) - parseFloat(numB));
    }
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={{fontSize: 20}}>Tulos: {result.toFixed(2)}</Text>
        <TextInput 
          keyboardType="numeric" 
          style={{fontSize:18, width: 200, borderColor: 'gray', borderWidth: 1}}
          onChangeText={numA => setNumA(numA)}
          value={numA}
        />
        <TextInput 
          keyboardType="numeric" 
          style={{fontSize: 18, width: 200, borderColor: 'gray', borderWidth: 1}}
          onChangeText={numB => setNumB(numB)}
          value={numB}
        />        
      </View>
      <View style={styles.buttoncontainer}>
        <Button onPress={() => calculate('+')} title=" + " />
        <Button onPress={() => calculate('-')} title=" - " />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttoncontainer: {
    flex: 2,
    width: 150,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    padding: 20,
  },  
});