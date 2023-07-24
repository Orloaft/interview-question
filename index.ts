function firstNonRepeated(s: string): string {
  const charCounts = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    charCounts.set(char, (charCounts.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (charCounts.get(char) === 1) {
      return char;
    }
  }

  return "";
}

console.log(firstNonRepeated("hello, hi"));
console.log(firstNonRepeated("aabcc"));
console.log(firstNonRepeated("aabbcc"));
