import type { NavigatorScreenParams } from '@react-navigation/native';
import VehicleListScreen from '../screens/vehicleListScreen/VehicleList';
import SplashScreen from '../screens/splashScreen/Splash';
import VehicleDetailScreen from '../screens/vehicleDetailScreen/VehicleDetail';
import ChargingScreen from '../screens/chargingScreen/Charging';

export const RouteNames = {
  SplashScreen: 'SplashScreen',
  VehicleListScreen: 'VehicleListScreen',
  VehicleDetailScreen: 'VehicleDetailScreen',
  ChargingScreen: 'ChargingScreen',
};

export const SCREENS = {
  Splash: {
    title: RouteNames.SplashScreen,
    component: SplashScreen,
    disableGesture: false,
  },
  VehicleListScreen: {
    title: RouteNames.VehicleListScreen,
    component: VehicleListScreen,
    disableGesture: true,
  },
  VehicleDetailScreen: {
    title: RouteNames.VehicleDetailScreen,
    component: VehicleDetailScreen,
    disableGesture: false,
  },
  ChargingScreen: {
    title: RouteNames.ChargingScreen,
    component: ChargingScreen,
    disableGesture: false,
  },
};

type ParamListTypes = {
  SplashScreen: undefined;
  VehicleListScreen: undefined;
  VehicleDetailScreen: {
    vehicleId: number;
  };
  ChargingScreen: {
    vehicleId: number;
  };
};

export type RootStackParamList = {
  [P in Exclude<keyof typeof SCREENS, keyof ParamListTypes>]: undefined;
} & ParamListTypes;

// Make the default RootParamList the same as the RootStackParamList
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
