import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image source={{ uri: 'https://example.com/profile-image.png' }} style={styles.profileImage} />
      <Text style={styles.username}>Hi John!</Text>
      <Text style={styles.scans}>50+ Scans</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  scans: {
    marginLeft: 10,
    fontSize: 14,
    color: 'gray',
  },
});
