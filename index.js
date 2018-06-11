// Code your solution here:
// name: 'Sally',   revenue: 400
// function driversWithRevenueOver (drivers, num) {
//   let newArray = []
//   return drivers.filter(function (account) {
//     console.log(account)

//     if (account.revenue > num) {
//       return newArray.push(account)
//     }
//   })
//   return newArray
// }


function driversWithRevenueOver(drivers, num) {
    return drivers.filter(function (driver) {
        return (driver.revenue > num)
    });
}


function driverNamesWithRevenueOver (drivers, num) {
  return driversWithRevenueOver(drivers, num).map(function (account) {
    return account.name
  })
}

function exactMatch (drivers, match) {
  var result = [];
  drivers.filter(driver => {
    for (const key in driver) {
      if (driver[key] === match[key]) {
        result.push(driver);
      }
    }
  });
  return result;
}

let drivers = [{ name: 'Sally', revenue: 400 }, { name: 'Sally', revenue: 200 }, { name: 'Sue', revenue: 200 }];
exactMatch(drivers, { revenue: 200 })

function exactMatchToList(drivers, match) {
  var result = [];
  drivers.filter(driver => {
    for (const key in driver) {
      if (driver[key] === match[key]) {
        result.push(driver.name);
      }
    }
  });
  return result;
}