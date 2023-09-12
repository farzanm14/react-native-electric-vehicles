import { ChargingService, constants } from "./ChargingService";
import { Charge } from "../../models/Charge";

describe("ChargingService", () => {
  let chargingService: ChargingService;

  beforeEach(() => {
    chargingService = new ChargingService();
  });

  afterEach(() => {
    chargingService.killProcess();
  });

  describe("generate random charge level", () => {
    it("should generate a random charge with percentage and value", () => {
      const charge: Charge = chargingService.generateRandomCharge();
      expect(charge).toHaveProperty("percentage");
      expect(charge).toHaveProperty("value");
      expect(typeof charge.percentage).toBe("number");
      expect(typeof charge.value).toBe("number");
    });
  });

  describe("start charging", () => {
    it("should start charging and emit data", () => {
      const charge: Charge = { percentage: 0, value: 0 };
      const dataSpy = jest.spyOn(chargingService.data$, "next");

      const stopCharging = chargingService.startCharging(charge);

      expect(dataSpy).toHaveBeenCalledWith(charge);

      jest.advanceTimersByTime(constants.initialSpeed);
      expect(dataSpy).toHaveBeenCalledTimes(2); // Initial charge + first increment

      jest.advanceTimersByTime(constants.initialSpeed * 99); // Charge up to 99%
      expect(dataSpy).toHaveBeenCalledTimes(100); // 99 increments + initial charge

      jest.advanceTimersByTime(constants.initialSpeed); // Charge up to 100%
      expect(dataSpy).toHaveBeenCalledTimes(101); // Final increment

      stopCharging();
      expect(chargingService.killProcess).toHaveBeenCalled();
    });

    // it("should slow down charging after reaching 80%", () => {
    //   const charge: Charge = {
    //     percentage: 79,
    //     value: 79 * chargingService.stepValue,
    //   };
    //   const dataSpy = jest.spyOn(chargingService.data$, "next");

    //   chargingService.startCharging(charge);

    //   jest.advanceTimersByTime(constants.initialSpeed * 80); // Charge up to 80%
    //   expect(dataSpy).toHaveBeenCalledTimes(81); // 80 increments + initial charge

    //   jest.advanceTimersByTime(constants.initialSpeed); // Charge up to 81%
    //   expect(dataSpy).toHaveBeenCalledTimes(82); // Final increment

    //   expect(chargingService.chargingSpeed).toBe(constants.slowChargingSpeed);
    // });
  });

  //   describe("kill process", () => {
  //     it("should clear the interval", () => {
  //       const intervalSpy = jest.spyOn(global, "clearInterval");

  //       chargingService.killProcess();

  //       expect(intervalSpy).toHaveBeenCalled();
  //       expect(chargingService.interval).toBeUndefined();
  //     });
  //   });
});
