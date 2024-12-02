// Description:
// Credits to this post by @Diva on the Codewars Discord server for the Kata idea - I am forever indebted to them.

// No, this is not a theorem proving Kata. I've broken my theorem proving Kata streak for once ;-)

// The problem
// Consider a situation with 100 prisoners, as follows:

// The 100 prisoners problem is a mathematical problem in probability theory and combinatorics. In this problem, 100 numbered prisoners must find their own numbers in one of 100 drawers in order to survive. The rules state that each prisoner may open only 50 drawers and cannot communicate with other prisoners. At first glance, the situation appears hopeless, but a clever strategy offers the prisoners a realistic chance of survival. Danish computer scientist Peter Bro Miltersen first proposed the problem in 2003.

// (source: 100 prisoners problem - Wikipedia)

// To clarify the situation a bit:

// There are 100 prisoners, 100 drawers and 100 paper slips
// Each drawer contains exactly 1 paper slip, and the drawers are all in one isolated room
// The prisoners, drawers and slips are all labelled from 0-99 (both inclusive) respectively
// Each prisoner is allowed into the room, one by one, and they must find their number on a slip by opening at most 50 drawers
// After each prisoner finds their number or opens 50 drawers, whichever comes first, they must close all drawers, return the room to its original state and leave the room before the next prisoner is allowed in
// All 100 prisoners must find their number if they are to be released. If even 1 prisoner fails to find their number, all prisoners are executed immediately
// Once the process begins, prisoners aren't allowed to communicate with each other. However, prior to the process, the prisoners may gather up and agree upon a common strategy (or not)
// Let's assume that all prisoners agree to open 50 drawers at random, hoping to find their number. What is the probability that they are released?

// Since each prisoner opens exactly half the drawers, the probability that any given prisoner finds their own number is 0.5. With the random strategy, each of these probabilities is independent so the probability that all 100 prisoners find their own number is exactly 0.5 ** 100, i.e. effectively zero.

// Your task, as one of those 100 prisoners, is to concoct a unified strategy such that the probability of being released is at least 0.2. It might not be much, but in such a dire situation, every sliver of hope matters ;-)

// The task
// Implement a function solve100Prisoners that accepts an object context representing the problem context as its sole argument and performs actions on the context simulating the prisoners entering the room one by one and opening specific drawers of your choosing. The return value of your function will not be tested; instead, the final state of the context will be examined after your solution is invoked to check if (1) the process is over and (2) the prisoners are released. This will be repeated 100 times and your solution will pass if both conditions are met at least 20 times.

// How context works
// The context object provides the following actions (methods) for querying and/or advancing its state:

// isProcessComplete(): returns whether the process is over, i.e. either all prisoners are executed or all prisoners are released

// isSuccess(): returns whether all prisoners are released

// getCurrentPrisoner(): gets the label of the current prisoner - a number between 0 to 99, or 100 if all prisoners have left the room already

// openDrawer(label): Attempts to open the drawer with the given label as the current prisoner; valid values are 0-99. It may return any of the following values:

// undefined: if the process is over
// { valid: false }: if the process is not over, but the specified drawer has already been opened by the current prisoner or the label is invalid
// { valid: true, success: true }: if the drawer has not been previously opened by the current prisoner and the prisoner has found their number. In this case, the current prisoner also automatically leaves the room and the next prisoner (if any) automatically enters the room
// { valid: true, success: false, slipLabel }: otherwise
// Hints (or rather, a solution outline)
// If you haven't figured out a working approach after a long time, you may want to watch this video which presents a working approach in detail (and more). You still have to translate it into working code though ;-)

// A note on tests
// Due to the uncertain nature of the problem itself, it is possible for your working solution to fail the tests occasionally. If so, simply resubmit until it passes. If it still doesn't pass after 10 retries though, you probably have to rethink your approach ;-)

// A note on communicating prisoners
// The original problem statement forbids prisoners from communicating with each other once the process begins, and you are definitely encouraged to implement a proper solution if attempting the Kata for the first time (it's actually very simple, trust me); however, in case you manage to communicate with other prisoners under the warden's nose, props to you and all ;-)

// The warden will be tried and executed for negligence of duty though once the situation is uncovered. But then, why should you pity the warden anyway? ;-)

// A note on cheating
// This is a puzzle Kata, but not the type where you should be air-language-bending or discovering loopholes. There are basic protective measures in place to prevent incorrect solutions from unintentionally passing, but they aren't specifically designed to prevent cheating - if you submit a solution clearly in the spirit of cheating, we'll just invalidate your solution and apply additional restrictions to your account as necessary ;-)

// Puzzles, Mathematics, Probability, Logic

const solve100Prisoners = context => {
    while (!context.isProcessComplete()) {
      const prisoner = context.getCurrentPrisoner();
      if (prisoner === 100) break;
      
      let nextDrawer = prisoner;
      for (let attempts = 0; attempts < 50; attempts++) {
        const result = context.openDrawer(nextDrawer);
        if (!result?.valid) break;
        if (result.success) break;
        nextDrawer = result.slipLabel;
      }
    }
};