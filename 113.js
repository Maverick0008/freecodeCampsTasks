const sum = (...args) => {
 
    return args.reduce((a, b) => a + b, 0);
  }
  console.log(sum(5,5,5))