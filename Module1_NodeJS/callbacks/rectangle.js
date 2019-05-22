module.exports = (x, y, callback) => {
  if (x <= 0 || y <= 0) {
    setTimeOut(() =>
      // callback takes the error and the return value
      //the second parameter will be ignored here
      callback(new Error('rectangle dimision should be greater than 0 l= ' + x + ' b = ' + y), null),
      2000);
  } else {
    setTimeOut(() =>
      callback(null, {
        // this will be passed back 
        perimeter: (x, y) => (2 * (x + y));
        area: (x, y) => (x * y);
      }),
      2000);
  }

}
