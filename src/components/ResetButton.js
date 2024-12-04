import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ResetButton = ({ onReset }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onReset}>
      <Text style={styles.buttonText}>Reset</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF5722',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default ResetButton;
