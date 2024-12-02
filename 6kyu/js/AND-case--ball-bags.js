// Description:
// In the previous Kata we discussed the OR case.

// We will now discuss the AND case, where rather than calculating the probablility for either of two (or more) possible results, we will calculate the probability of receiving all of the viewed outcomes.

// For example, if we want to know the probability of receiving head OR tails in two tosses of a coin, as in the last Kata we add the two probabilities together. However if we want to know the probability of receiving head AND tails, in that order, we have to work differently.

// The probability of an AND event is calculated by the following rule:

// P(A ∩ B) = P(A | B) * P(B)

// or

// P(B ∩ A) = P(B | A) * P(A)

// That is, the probability of A and B both occuring is equal to the probability of A given B occuring times the probability of B occuring or vice versa. If the events are independent, like in the case of tossing a coin, the probability of A occuring if B has occured is equal to the probability of A occuring by itself. In this case, the probability can be written as the below:

// P(A ∩ B) = P(A) * P(B)

// or

// P(B ∩ A) = P(B) * P(A)

// Applying to the heads and tails case:

// P(H ∩ T) = 0.5 * 0.5

// or

// P(H ∩ T) = 0.5 * 0.5

// The task:

// You are given a random bag of 10 balls containing 4 colours. Red, Green, Yellow and Blue. You will also be given a sequence of 2 balls of any colour e.g. Green and Red or Yellow and Yellow.

// You have to return the probability of pulling a ball at random out of the bag and it matching the first colour and then pulling a ball at random out of the bag and it matching the second colour.

// You will be given a boolean value of true or false which indicates whether the balls that is taken out in the first draw is replaced in to the bag for the second draw. Hint: this will determine whether the events are independent or not.

// You will receive two arrays and a boolean value. The first array contains the colours of the balls in the bag and the second contains the colour of the two balls you have to receive. As per above the final boolean value will indicate whether the balls are being replaced true or not false.

// Do not mutate your inputs and do not round results.

// e.g. [["y","r","g","b","b","y","r","g","r","r"],["r","b"],false]

// Statistics, Probability, Arrays, Fundamentals

function ballProbability(balls) {
    const [bag, sequence, withReplacement] = balls;
    const [firstColor, secondColor] = sequence,
          totalBalls = bag.length,
          countFirstColor = bag.filter(ball => ball === firstColor).length,
          countSecondColor = bag.filter(ball => ball === secondColor).length;
    if (withReplacement) {
      const probFirstColor = countFirstColor / totalBalls,
            probSecondColor = countSecondColor / totalBalls;
      return probFirstColor * probSecondColor;
    } else {
      const probFirstColor = countFirstColor / totalBalls,
            probSecondColor = firstColor === secondColor ? 
              (countSecondColor - 1) / (totalBalls - 1) :
              countSecondColor / (totalBalls - 1);
      return probFirstColor * probSecondColor;
    }
}