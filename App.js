import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { VictoryChart, VictoryBar, VictoryTheme, VictoryPie } from 'victory-native'
import data from './Data'
import Charts from './Charts';

export default function App() {
  const Data = [
    {
      month: 1,
      earning:546
  },
  {
      month: 2,
      earning:346
  },
  {
      month: 3,
      earning:646
  },
  {
      month: 4,
      earning:346
  },
  {
      month: 5,
      earning:345
  },
  {
      month: 6,
      earning:546
  },
  {
      month: 7,
      earning:326
  }
    
  ]
  return (
   <Charts/>
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
