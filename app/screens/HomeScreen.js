import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import moment from 'moment';
import Header from '../../components/Header';
import Timer from '../../components/Timer';
import Prizes from '../../components/Prizes';

export default function HomeScreen() {
  const [nextDrawTime, setNextDrawTime] = useState(null);

  useEffect(() => {
    fetchNextDraw();
  }, []);

  const fetchNextDraw = async () => {
    try {
      const response = await fetch('https://api.mockfly.dev/mocks/d29981f2-3648-4069-8b68-c300eab0dfc1/lottery/next-draw');
      const data = await response.json();
      setNextDrawTime(moment(data.date));
    } catch (error) {
      console.log('Error fetching next draw:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      {nextDrawTime && <Timer nextDrawTime={nextDrawTime} />}
      <Prizes />
      <Button title="Scan Products & Win" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
