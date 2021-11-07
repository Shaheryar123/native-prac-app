import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { VictoryChart, VictoryBar, VictoryTheme, VictoryPie } from 'victory-native'
import data from './Data'


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
    <ScrollView >
      <View style = {styles.container}>
      <VictoryPie  animate theme={ VictoryTheme.material} data={ Data} x= "month" y = "earning" />
      <Text> Bar Chart</Text>
      
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryBar style={{
                    data: {width: 10, fill: (data) => data.x === 1 ? "#d9d9d9" : "#2ba8de"
                  },
                    labels: {  fontSize: 10, fontFamily: "Whitney"}
          }}
            labels={({ datum }) => `${datum._y}`} animate data={Data} x="month" y="earning" />
      </VictoryChart>
      
      </View>      
      
    </ScrollView>
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
