import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TeamInfo = ({ teamName, score }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 15,
    padding: 10,
    borderWidth: 2,
    borderColor: '#4CAF50',
    borderRadius: 10,
    backgroundColor: '#E8F5E9',
    width: '80%',
  },
  teamName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#388E3C',
  },
  score: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#1B5E20',
  },
});

export default TeamInfo;
