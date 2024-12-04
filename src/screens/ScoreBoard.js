import React, { useState } from 'react';
import { View, Alert, StyleSheet, Text } from 'react-native';
import TeamInfo from '../components/TeamInfo';
import ScoreButtons from '../components/ScoreButtons';
import ResetButton from '../components/ResetButton';

const ScoreBoard = () => {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  const checkWinner = () => {
    if (teamAScore >= 10) {
      Alert.alert('🎉 Team A Wins!', 'Skor sudah mencapai 10.');
      resetScores();
    } else if (teamBScore >= 10) {
      Alert.alert('🎉 Team B Wins!', 'Skor sudah mencapai 10.');
      resetScores();
    }
  };

  const resetScores = () => {
    setTeamAScore(0);
    setTeamBScore(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Futsal Score Board</Text>
      <TeamInfo teamName="Team A" score={teamAScore} />
      <ScoreButtons
        onIncrease={() => {
          setTeamAScore(teamAScore + 1);
          checkWinner();
        }}
        onDecrease={() => setTeamAScore(Math.max(0, teamAScore - 1))}
      />
      <TeamInfo teamName="Team B" score={teamBScore} />
      <ScoreButtons
        onIncrease={() => {
          setTeamBScore(teamBScore + 1);
          checkWinner();
        }}
        onDecrease={() => setTeamBScore(Math.max(0, teamBScore - 1))}
      />
      <ResetButton onReset={resetScores} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F8E9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#388E3C',
    marginBottom: 20,
  },
});

export default ScoreBoard;
