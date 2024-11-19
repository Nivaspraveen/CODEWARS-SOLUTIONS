// Description:
// Create an endless stream that yields prime numbers. The stream must be able to produce a million primes in a few seconds.

// If this is too easy, try Prime Streaming (NC-17).

class Primes {
    static * stream() {
      const primes = [2];
      let number = 3;
      yield 2;
      
      while (true) {
        let isPrime = true;
        const limit = Math.sqrt(number);
        for (const prime of primes) {
          if (prime > limit) break;
          if (number % prime === 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) {
          primes.push(number);
          yield number;
        }
        number += 2;
      }
    }
}