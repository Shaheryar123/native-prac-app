import React from 'react'
import { View, Text } from 'react-native'

const Charts = () => {
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
    )
}

export default Charts
