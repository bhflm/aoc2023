import fs from 'fs';

async function loadFile(filePath: string) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch(err) {
    throw Error(JSON.stringify(err))
  }
};

function isDigit(c: string): boolean {
  if (!/\d/.test(c)) {
    return false;
  }

  return true;
}

export function findNumberSubstring(stringArray: string[], start: number, end: number): number {
  const validNumbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  let num = -1;

  if (stringArray.length === 0) {
    return num;
  }

  const str = stringArray.slice(start,end).join('');

  let i = 0;

  while (i < validNumbers.length && num == -1) {
    const numberString = validNumbers[i];    
    const index = str.indexOf(numberString);
    if (index != -1) {
      // found Number;
      num = i + 1;
      return num;
    }

    i++
  };
  return num;
};


export function processLine(line: string): number {
  const splitted: string[] = line.split('');
  // we're gonna do two passes, one for the very first occurrence of digit / word number from left;
  let leftDigit = null;
  let i = 0;
  while (i < splitted.length && !leftDigit) {
    // check if !foundLeft i is digit, if digit
    let numberInSubstring = findNumberSubstring(splitted, 0, i);
    if (!leftDigit && numberInSubstring != -1){
      leftDigit = numberInSubstring;
      // if not check from 0 to I, if chunk of words includes number in string => slice the string until found with indexOf;
    }
    // do this as a second check because it goes off by one with the index check, and it gets first on this if 
    // or probably can refactor it as an if/else if but still it will get first on this 
    // words have precedence before
    if(isDigit(splitted[i]) && !leftDigit) {
      leftDigit = parseInt(splitted[i], 10);
    }
    i ++
  }; 

  let rightDigit = null;
  let j = splitted.length;
  // backwards buddy !
  while (j >= 0 && !rightDigit) {
    let numberInSubstring = findNumberSubstring(splitted,j,splitted.length);
    if (!rightDigit && numberInSubstring != -1) {
      rightDigit = numberInSubstring;
    };

    if(isDigit(splitted[j]) && !rightDigit) {
      rightDigit = parseInt(splitted[j], 10);
    };
    j --
  }

  const digit = parseInt(`${leftDigit}${rightDigit}`, 10);
  return digit;
};

async function main() {
  let count = 0;
  const filePath = 'input.txt';
  const files = await loadFile(filePath);
  const arr = files.split(/\r?\n/);
  const err = [];

  arr.forEach((line, i) => {
    const res = processLine(line);
    count += res;
  });

  return count;
};

const trebuchet = await main();

console.log('trebuchet: ', trebuchet);