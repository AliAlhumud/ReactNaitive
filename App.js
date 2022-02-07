import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';



export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [couseGoals, setCourseGoals] = useState([]);
  const goalInputHandeler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal])
  };
  return (
    <View style={styles.container}>

      <View style={styles.screen}>
        <TextInput placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandeler}
          value={enteredGoal}
        />
        <Button title="Add" onPress={addGoalHandler} />
        <View>

          {couseGoals.map((goal) => <Text>{goal}</Text>)}
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  screen: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },


  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },


});