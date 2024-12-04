import React from 'react';
import { SafeAreaView } from 'react-native';
import ScoreBoard from './src/screens/ScoreBoard';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScoreBoard />
    </SafeAreaView>
  );
};

export default App;
