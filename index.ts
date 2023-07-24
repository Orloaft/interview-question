/**
 * Returns the first non-repeated character in the string.
 *
 * @param s - The input string to search.
 * @returns The first non-repeated character or an empty string if there is none.
 */
function firstNonRepeated(s: string): string {
  // Create a map to store character counts
  const charCounts = new Map<string, number>();
  // Iterate over the string to populate the map
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    charCounts.set(char, (charCounts.get(char) || 0) + 1);
  }
  // Iterate over the string a second time to find the first non-repeated character
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (charCounts.get(char) === 1) {
      return char;
    }
  }
  // If no non-repeated character was found, return an empty string
  return "";
}

console.log(firstNonRepeated("hello, hi"));
console.log(firstNonRepeated("aabcc"));
console.log(firstNonRepeated("aabbcc"));
