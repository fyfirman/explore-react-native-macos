import React from 'react';
import { Button, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { useStopWatch } from '../hooks/useStopWatch';

const HomeScreen = () => {
  const { time, isRunning, start, stop, reset } = useStopWatch();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <View>
        <Text>{time}</Text>

        <View>
          <Button
            onPress={() => {
              isRunning ? stop() : start();
            }}
            color={isRunning ? 'red' : 'green'}
            title={isRunning ? 'Stop' : 'Start'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
