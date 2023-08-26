import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App()  {
  const [text, setText] = useState('');
  const [guessnum, setGuessnum] = useState('');
  const [count, setCount] = useState(1);
  const [rndnum, setRndnum] = useState(0);

  useEffect(() => resetGame(), [])

  const resetGame = () => {
    setRndnum(Math.floor(Math.random() * 100) + 1);
    setText('Guess a number between 1-100');
    setCount(1);
    setGuessnum('');
  }

  const makeGuess = () => {
    if (rndnum === parseInt(guessnum)) {
      Alert.alert(`You guessed the number in ${count} guesses`);
      resetGame();
    }
    else if (rndnum < parseInt(guessnum)) {
      setText(`Your guess ${guessnum} is too high`);
    }
    else  {
      setText(`Your guess ${guessnum} is too low`);
    }          

    setGuessnum('');
    setCount(prevCount => prevCount + 1);
  }
  
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>{text}</Text>
      <TextInput 
        keyboardType='numeric' 
        style={{fontSize: 20, width: 50, borderColor: 'gray', borderWidth: 1, margin: 20}}
        onChangeText={guessnum => setGuessnum(guessnum)}
        value={guessnum}/>
      <Button onPress={makeGuess} title="Make guess" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
