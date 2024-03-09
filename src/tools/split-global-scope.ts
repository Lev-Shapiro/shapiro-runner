export function splitBySpaceInGlobalScope(input: string): string[] {
  const result: string[] = [];
  let currentWord = "";
  let isInString = false;
  let stringDelimiter = "";

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (!isInString) {
      if (char === '"' || char === "'") {
        isInString = true;
        stringDelimiter = char;
        currentWord += char;
      } else if (char === " ") {
        if (currentWord !== "") {
          result.push(currentWord);
          currentWord = "";
        }
      } else {
        currentWord += char;
      }
    } else {
      currentWord += char;

      if (char === stringDelimiter) {
        isInString = false;
      }
    }
  }

  if (currentWord.length && currentWord !== "") {
    result.push(currentWord);
  }

  return result;
}
