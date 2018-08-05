const _ = require('lodash');

exports.DIT = '.';
exports.DAH = '-';

const morseCodeLetterMapping = {
  'a': '.-',
  'b': '-...',
  'c': '-.-.',
  'd': '-..',
  'e': '.',
  'é': '..-..',
  'f': '..-.',
  'g': '--.',
  'h': '....',
  'i': '..',
  'j': '.---',
  'k': '-.-',
  'l': '.-..',
  'm': '--',
  'n': '-.',
  'o': '---',
  'p': '.--.',
  'q': '--.-',
  'r': '.-.',
  's': '...',
  't': '-',
  'u': '..-',
  'v': '...-',
  'w': '.--',
  'x': '-..-',
  'y': '-.--',
  'z': '--..',
};

const morseCodeNumberMapping = {
  '1': '.----',
  '2': '..---',
  '3': '...--',
  '4': '....-',
  '5': '.....',
  '6': '-....',
  '7': '--...',
  '8': '---..',
  '9': '----.',
  '0': '-----',
};

const morseCodePunctuationMapping = {
  '.': '.-.-.-',
  ',': '--.--',
  ':': '---...',
  '?': '..--..',
  '\'': '.----.',
  '-': '-....-',
  '/': '-..-.',
  '(': '-.--.',
  ')': '-.--.-',
  '"': '.-..-.',
  '=': '-...-',
  '+': '.-.-.',
  '×': '-..-',
  '@': '.--.-.',
};

const unifiedMorseCodeMapping = {
  ...morseCodeLetterMapping,
  ...morseCodeNumberMapping,
  ...morseCodePunctuationMapping,
};

const reversedUnifiedMorseCodeMapping = _.invert(unifiedMorseCodeMapping);

exports.toMorse = (char) => {
  return _.has(
    unifiedMorseCodeMapping, char
  ) ? unifiedMorseCodeMapping[char] : undefined;
};

exports.toChar = (morse) => {
  return _.has(
    reversedUnifiedMorseCodeMapping, morse
  ) ? reversedUnifiedMorseCodeMapping[morse]: undefined;
};
