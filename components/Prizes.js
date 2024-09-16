import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Prizes() {
  return (
    <View style={styles.prizes}>
      <View style={styles.prizeItem}>
        <Text style={styles.prizeText}>€1000 Shopping Voucher</Text>
        <Text style={styles.storeText}>Welbee's Supermarket</Text>
      </View>
      <View style={styles.prizeItem}>
        <Text style={styles.prizeText}>€100 Shopping Voucher</Text>
        <Text style={styles.storeText}>Greens Supermarket</Text>
      </View>
      <View style={styles.prizeItem}>
        <Text style={styles.prizeText}>€50 Shopping Voucher</Text>
        <Text style={styles.storeText}>Pavi, PAAMA</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  prizes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  prizeItem: {
    alignItems: 'center',
  },
  prizeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  storeText: {
    fontSize: 14,
    color: 'gray',
  },
});
