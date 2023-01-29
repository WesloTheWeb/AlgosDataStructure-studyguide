// Reference on Object Orienting Programming:
class Car {
    constructor(carId, checkIn) {
      this.carId = carId,
      this.checkIn = checkIn
    }
  }
  
  class ParkingGarage {
    constructor(carCount, limit, storedCars) {
      this.carCount = carCount;
      this.limit = limit;
      this.storedCars = storedCars // ['abc', 'efg']
    }
  
    addCar(carId) {
      // time property
      let checkIn = Date.now();
      let id = carId;
      
      if (this.carCount >= this.limit) {
        console.log('limit reached')
        // this.carCount = this.limit;
      } else {
        new Car(id, checkIn)
        this.carCount++
      }
    }
  
    getTime(carId) {
      ParkingGarage.carId.checkIn
    }
  
    // Max Occcupancy
    maxOccupancy(numOfCars) {
      if (numOfCars > limit) {
        console.log('Lot is full')
        this.carCount = limit;
      } else {
        console.log('There is still room to park')
      }
    }
  
      queryCar(carID) {
      
      }
    
    // Query for how long a car has been parked.
    //  - consider which car we're talking about (idtentifying features. id or timestamp)
    //  - a way to track time since car has been added
    //   if was to use new Date() would need to convert to unix time, find difference.
    //    - license for car, 
    /*
      - carID, 
      -
  
  
    */
  
    
  }
  
  const garage = new ParkingGarage(1, 2);
  garage.addCar('abc');
  garage.addCar('efg');
  
  console.log(garage.addCar('abc').checkIn)
  
  // garage.maxOccupancy(11, 20)
  console.log('car count' , garage.carCount)
  
  console.log(garage.maxOccupancy)
  
  console.log(Date.now())
  
  // TODO: Organize this and refactor.