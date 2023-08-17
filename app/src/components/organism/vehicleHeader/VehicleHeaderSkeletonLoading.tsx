import React from 'react';
import { View } from 'react-native';
import Skeleton from '../../atoms/skeleton/Skeleton';
import styles from './vehicleHeaderStyles';

export default function VehicleHeaderLoading() {
  return (
    <>
      <Skeleton style={styles.image} />
      <View style={styles.topRow}>
        <View>
          <Skeleton style={styles.brand} />
          <Skeleton style={styles.brand} />
        </View>
        <View>
          <Skeleton style={styles.category} />
          <Skeleton style={styles.version} />
        </View>
      </View>
    </>
  );
}
