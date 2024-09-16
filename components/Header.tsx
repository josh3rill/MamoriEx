import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  scans: {
    fontSize: 16,
  },
  bookmarkContainer: {
    flexDirection: 'column', // Arrange elements vertically
    alignItems: 'center',
  },
  bookmarkImage: {
    width: 20,
    height: 20,
  },
  bookmarkCount: {
    fontSize: 14,
    color: 'gray',
  },
  bookmarkLabel: {
    fontSize: 14,
  },
});

const ProfileAndBookmarkComponent = () => {
  const profileImageUrl = '../assets/images/react-logo.png'; // Replace with your actual image URL

  return (
    <View style={styles.container}>
      <Image source={{ uri: profileImageUrl }} style={styles.profileImage} />
      <View style={styles.textContainer}>
        <Text style={styles.username}>Hi John!</Text>
        <Text style={styles.scans}>50+ Scans</Text>
      </View>
      <View style={styles.bookmarkContainer}>
        <Image source={require('../assets/images/react-logo.png')} style={styles.bookmarkImage} />
        <Text style={styles.bookmarkCount}>124</Text>
        <Text style={styles.bookmarkLabel}>View Entries</Text>
      </View>
    </View>
  );
};

export default ProfileAndBookmarkComponent;