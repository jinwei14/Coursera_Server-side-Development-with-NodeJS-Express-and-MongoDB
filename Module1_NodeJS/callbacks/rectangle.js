module.exports = (x, y, callback) => {
  if (x <= 0 || y <= 0) {
      setTimeout(() =>
      // callback takes the error and the return value
      //the second parameter will be ignored here
      callback(new Error('rectangle dimension should be greater than 0 l= ' + x + ' b = ' + y), null),
      2000);
  } else {
      setTimeout(() =>
      callback(null, {
        // this will be passed back 
        perimeter: () => (2 * (x + y)),
        area: () => (x * y)
      }),
      2000);
  }

}
