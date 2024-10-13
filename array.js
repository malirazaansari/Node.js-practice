// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse();
// console.log(fruits);

// const months = ["Jan", "Feb", "Mar", "Apr"];
// const sorted = months.toSorted();
// console.log(sorted);

// const points = [40, 100, 1, 5, 25, 10];
// points.sort();
// // (function (a, b) {
// //   return a - b;
// // }
// // );
// console.log(points[4]);
// console.log(points);

// function longestIncreasingSubsequence(nums) {
//   const dp = new Array(nums.length).fill(1);
//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[i] > nums[j]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1);
//       }
//     }
//   }
//   return Math.max(...dp);
// }

// const nums = [10, 9, 7, 101, 18];
// console.log(longestIncreasingSubsequence(nums));

class ParkingLot {
  constructor(capacity) {
    this.capacity = capacity;
    this.parkingSlots = Array(capacity).fill(null);
  }

  parkCar(car) {
    const emptySlotIndex = this.parkingSlots.indexOf(null);
    if (emptySlotIndex !== -1) {
      this.parkingSlots[emptySlotIndex] = car;
      console.log(`Car ${car} parked at slot ${emptySlotIndex + 1}.`);
    } else {
      console.log("Parking lot is full.");
    }
  }

  removeCar(slotNumber) {
    if (this.parkingSlots[slotNumber - 1]) {
      const car = this.parkingSlots[slotNumber - 1];
      this.parkingSlots[slotNumber - 1] = null;
      console.log(`Car ${car} removed from slot ${slotNumber}.`);
    } else {
      console.log("Slot is already empty.");
    }
  }

  displayStatus() {
    console.log("Parking Lot Status:");
    this.parkingSlots.forEach((car, index) => {
      console.log(`Slot ${index + 1}: ${car ? car : "Empty"}`);
    });
  }
}

const lot = new ParkingLot(3);
lot.parkCar("Car1");
lot.parkCar("Car2");
lot.parkCar("Cars");
lot.parkCar("Cars2");

lot.displayStatus();
lot.removeCar(1);
lot.displayStatus();
