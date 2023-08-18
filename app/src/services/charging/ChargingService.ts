import { Subject } from "rxjs";
import { Charge } from "../../models/Charge";

export const constants = {
  barLength: 300,
  stepValue: 3,
  initialSpeed: 1_000, //ms
  slowChargingSpeed: 1_750, //ms
};

export class ChargingService {
  private interval: NodeJS.Timeout | undefined;
  private maxValue = constants.barLength;
  private stepValue = this.maxValue / 100;
  private chargingSpeed = constants.initialSpeed;
  private dataSubject$ = new Subject<Charge>();
  public readonly data$ = this.dataSubject$.asObservable();

  public generateRandomCharge(): Charge {
    // generate a random charge percentage
    const randomChargePercent = Number((Math.random() * 100).toFixed());
    // calculate the charge value for displaying on the charging-bar
    const chargeValue = randomChargePercent * this.stepValue;
    return { percentage: randomChargePercent, value: chargeValue };
  }

  public startCharging(charge: Charge) {
    let currentCharge = charge;
    this.dataSubject$.next(currentCharge);
    this.interval = setInterval(() => {
      if (currentCharge.percentage < 100) {
        const nextPercentage = currentCharge.percentage + 1;
        const nextValue = currentCharge.value + this.stepValue;
        currentCharge = { percentage: nextPercentage, value: nextValue };
        this.dataSubject$.next(currentCharge);
        if (currentCharge.percentage >= 80) {
          this.chargingSpeed = constants.slowChargingSpeed;
        }
      } else {
        this.killProcess();
      }
    }, this.chargingSpeed);
    return () => {
      this.killProcess();
    };
  }

  // useEffect(() => {
  //   console.log('hey please update perventage', percentage);
  //   // Decrease speed by 25% when charge is 80 or more
  //   if (percentage >= 80) {
  //     setSpeed(constants.slowChargingSpeed);
  //   }
  // }, [percentage]);

  public killProcess() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }
}
