function caesar13(input) {
  if (input === '') throw new Error('Input can not be empty');
  if (typeof input !== 'string') throw new Error('Input must be a string');

  const inputArr = input.split('');

  const encodedInput = [];

  inputArr.forEach(char => {
    if ((/[a-zA-Z]/).test(char)) {
      encodedInput.push(encodeLetter(char));
    }
  });

  return encodedInput.join('');
}

function encodeLetter(letter) {
  const ASCIINumber = letter.charCodeAt(0);

  if ((/[a-z]/).test(letter)) {
    const encodedASCIINumber = (((ASCIINumber - 97) + 13) % 26) + 97;
    return String.fromCharCode(encodedASCIINumber);
  }

  if ((/[A-Z]/).test(letter)) {
    const encodedASCIINumber = (((ASCIINumber - 65) + 13) % 26) + 65;
    return String.fromCharCode(encodedASCIINumber);
  }
}

export default caesar13