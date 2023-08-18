import LottieView from 'lottie-react-native';
import React from 'react';
import { View } from 'react-native';
import Skeleton from '../../../components/atoms/skeleton/Skeleton';
import MyText from '../../../components/atoms/text/MyText';
import VehicleHeaderLoading from '../../../components/organism/vehicleHeader/VehicleHeaderSkeletonLoading';
import styles from '../styles/chargingStyles';
import R from '../../../res/R';

const ChargingSkeletonLoading = () => {
  return (
    <>
      <VehicleHeaderLoading />

      <View style={styles.barContainer}>
        <LottieView style={styles.barBody} source={R.images.barTop} />
        <LottieView style={styles.barBody} source={R.images.barBody} />
        <LottieView style={styles.barBody} source={R.images.barShine} />
        <LottieView style={styles.barBody} source={R.images.barThunder} />
      </View>
      <View style={styles.informationContainer}>
        <MyText style={styles.title}>
          kWh{'\n'}
          <Skeleton style={{}} />
        </MyText>
        <MyText style={styles.percentage}>0%</MyText>
        <MyText style={styles.title}>
          Speed{'\n'}
          <Skeleton style={{}} />
        </MyText>
      </View>
    </>
  );
};

export default ChargingSkeletonLoading;
