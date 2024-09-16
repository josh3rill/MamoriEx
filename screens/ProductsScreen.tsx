import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Products Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Customize the background color here
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

export default ProductsScreen;
