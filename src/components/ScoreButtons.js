import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ScoreButtons = ({ onIncrease, onDecrease }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onIncrease}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onDecrease}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    width: '60%',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default ScoreButtons;
