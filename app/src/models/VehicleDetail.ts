import {Category} from './Category';

export interface VehicleDetail {
  id: number;
  brand: string;
  model: string;
  version: string;
  category: Category;
  connectorType: string;
  recommendedCharger: string;
  chargeSpeedInKw: number;
  helpUrl: string;
  imageUrl: string;
  autochargeCapable: false;
  externalParameters: {
    typecode: string;
    ref_consumption: number;
    usable_battery_wh: number;
    fast_chargers: string;
  };
}
