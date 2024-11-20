// Description:
// The "Roulette wheel selection", also known as "Fitness proportionate selection", is a genetic operator used in genetic algorithms for selecting potentially useful solutions for recombination.

// Your task is to implement it.

// http://i.imgur.com/K5VSzVT.png

// You throw a coin in and has a chance to fall in one of the slots, the higher the fitness the higher the chance the element has to be selected.

// Given the population and fitnesses, your task is to run the roulette to return one element.

// Note: Some tests are random. If you think your algorithm is correct but the result fails, trying again should work.

// TOPICS: Strings, Fundamentals, Genetic Algorithms, Algorithms

const select = (population, fitnesses) => {
    const totalFitness = fitnesses.reduce((total, fit) => total + fit, 0),
          probabilities = fitnesses.map(fit => fit / totalFitness);
    let cumulativePb = 0;
    for (let i = 0; i < population.length; i++) {
      cumulativePb += probabilities[i];
      if (Math.random() < cumulativePb) return population[i]; 
    }
};