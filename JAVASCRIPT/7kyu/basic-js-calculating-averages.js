// Description:
// Let's build a calculator that can calculate the average for an arbitrary number of arguments.

// The test expects you to provide a Calculator object with an average method:

// Calculator.average()
// The test also expects that when you pass no arguments, it returns 0. The arguments are expected to be integers.

// It expects Calculator.average(3,4,5) to return 4.

var Calculator = {
    average: function() {
      let args = Array.from(arguments);
      if (args.length === 0) return 0;
      let sum = args.reduce((acc, num) => acc + num, 0);
      return sum / args.length;
    }
};