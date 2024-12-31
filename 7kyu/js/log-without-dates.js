// Description:
// You will be given an array of events, which are represented by strings. The strings are dates in HH:MM:SS format.

// It is known that all events are recorded in chronological order and two events can't occur in the same second.

// Return the minimum number of days during which the log is written.

// Example:

// Input -> ["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"]
// Output -> 1

// Input -> ["12:12:12"]
// Output -> 1

// Input -> ["12:00:00", "23:59:59", "00:00:00"]
// Output -> 2

// Input -> []
// Output -> 0
// Good luck

// Date Time    Filtering

function checkLogs(log) {
  if (log.length === 0) return 0;
  let days = 1,
    prevTime = log[0];
  for (let i = 1; i < log.length; i++) {
    if (log[i] <= prevTime) days++;
    prevTime = log[i];
  }
  return days;
}
