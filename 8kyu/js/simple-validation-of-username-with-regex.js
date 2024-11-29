// Description:
// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

// Regular Expressions, Fundamentals

const validateUsr = (username) => /^[a-z0-9_]{4,16}$/.test(username);