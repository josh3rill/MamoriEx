import { Image, StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ProfileAndBookmarkComponent() {
  const profileImageUrl = 'https://cdn.pixabay.com/photo/2016/11/02/11/08/monk-1791113_640.jpg'; // Replace with your actual image URL

  return (
    <ThemedView style={styles.container}>
      <Image source={{ uri: profileImageUrl, headers: { Accept: 'image/*' } }} style={styles.profileImage} />
      <ThemedView style={styles.textContainer}>
        <ThemedText type="subtitle">Hi John!</ThemedText>
        <ThemedText>50+ Scans</ThemedText>
      </ThemedView>
      <ThemedView style={styles.bookmarkContainer}>
        <Image source={require('@/assets/images/react-logo.png')} style={styles.bookmarkImage} />
        <ThemedText type="defaultSemiBold">124</ThemedText>
        <ThemedText>View Entries</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8, // Adds space between elements
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
  bookmarkContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4, // Adds space between bookmark elements
  },
  bookmarkImage: {
    width: 20,
    height: 20,
  },
});