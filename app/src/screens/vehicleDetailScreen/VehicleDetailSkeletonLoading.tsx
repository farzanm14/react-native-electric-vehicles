import React from 'react';
import { View } from 'react-native';
import Skeleton from '../../components/atoms/skeleton/Skeleton';
import VehicleHeaderLoading from '../../components/organism/vehicleHeader/VehicleHeaderSkeletonLoading';
import styles from './vehicleDetailStyles';

const VehicleDetailLoading = () => {
  return (
    <>
      <VehicleHeaderLoading />
      <View style={styles.infoContainer}>
        <Skeleton style={styles.detailBoxLoading} />
        <Skeleton style={styles.detailBoxLoading} />
      </View>
      <Skeleton style={styles.boxContainerLoading} />
      <Skeleton style={styles.submitButtonLoading} />
    </>
  );
};

export default VehicleDetailLoading;
