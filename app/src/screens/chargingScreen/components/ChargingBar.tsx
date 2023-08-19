import React from "react";
import { useEffect, useRef, useState } from "react";
import MyText from "../../../components/atoms/text/Text";
import { View } from "react-native";
import { Charge } from "../../../models/Charge";
import {
  ChargingService,
  constants,
} from "../../../services/charging/ChargingService";
import styles from "../styles/chargingBarStyles";
import LottieView from "lottie-react-native";
import R from "../../../res/R";
import { VehicleDetail } from "../../../models/VehicleDetail";

interface IChargingBarProps {
  vehicle: VehicleDetail;
}

const ChargingBar = ({ vehicle }: IChargingBarProps) => {
  const chargingService = new ChargingService();
  const [charge, setCharge] = useState<Charge>({ percentage: 0, value: 0 });
  const barTopAnimationRef = useRef<LottieView>(null);
  const barBodyAnimationRef = useRef<LottieView>(null);

  useEffect(() => {
    chargingService.startCharging(chargingService.generateRandomCharge());
    chargingService.data$.subscribe((value) => {
      setCharge(value);
    });

    return () => {
      chargingService.killProcess();
    };
  }, []);

  useEffect(() => {
    if (charge.percentage < 100) {
      barBodyAnimationRef.current?.play(
        charge.value,
        charge.value + constants.stepValue
      );
      barTopAnimationRef.current?.play(
        charge.value,
        charge.value + constants.stepValue
      );
    }
    return () => {
      barBodyAnimationRef.current?.pause();
      barTopAnimationRef.current?.pause();
    };
  }, [charge.percentage]);

  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
        <LottieView
          ref={barTopAnimationRef}
          style={styles.barBody}
          loop={false}
          source={R.images.barTop}
        />
        <LottieView
          ref={barBodyAnimationRef}
          loop={false}
          style={styles.barBody}
          source={R.images.barBody}
        />
        <LottieView
          style={styles.barBody}
          speed={charge.percentage <= 80 ? 0.25 : 1}
          loop
          autoPlay
          source={R.images.barShine}
        />
        <LottieView
          style={styles.barBody}
          loop
          autoPlay
          source={R.images.barThunder}
        />
      </View>
      <View style={styles.informationContainer}>
        <MyText style={styles.title}>
          kWh
          {"\n"}
          <MyText style={styles.values}>
            {vehicle.externalParameters.usable_battery_wh / 1000}
          </MyText>
        </MyText>
        <MyText style={styles.percentage}>
          {charge.percentage.toFixed()}%
        </MyText>
        <MyText style={styles.title}>
          Speed{"\n"}
          <MyText style={styles.values}>{vehicle.chargeSpeedInKw}kW</MyText>
        </MyText>
      </View>

      {charge.percentage == 100 && (
        <MyText style={styles.fullChargedMessage}>Full Charged :)</MyText>
      )}
    </View>
  );
};

export default ChargingBar;
