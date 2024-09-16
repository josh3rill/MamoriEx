import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';

export default function Timer({ nextDrawTime }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerId);
  }, [nextDrawTime]);

  function calculateTimeLeft() {
    const now = moment();
    const duration = moment.duration(nextDrawTime.diff(now));
    return {
      days: duration.days(),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  }

  return (
    <View style={styles.timer}>
      <Text style={styles.timeText}>{timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes {timeLeft.seconds} Seconds</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timer: {
    marginVertical: 20,
  },
  timeText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
