import fs from 'fs';

async function loadFile(filePath: string) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch(err) {
    throw Error(JSON.stringify(err))
  }
};

// checks if char is digit or not
function isDigit(c: string): boolean {
  if (!/\d/.test(c)) {
    return false;
  }

  return true;
}

export function processLine(line: string): number {
  let first: string | undefined;
  let last: string | undefined;
  let n: number = 0;
  let prematureFound = false;
  
  const splitted: string[] = line.split('');

  // TWO POINTER APPROACH; find first digit and last digit
  let i = 0;
  let j = splitted.length - 1;
  
  while (i <= j && !prematureFound) {
    if (first && last) {
      prematureFound = true;
    }

    if (isDigit(splitted[i]) && !first){
      first = splitted[i];
    } 
    
    if (!first) {
      i ++;
    }


    if (isDigit(splitted[j]) && !last){
      last = splitted[j];
    }

    if (!last) {
        j --;
    }

  };

  if (first && !last) {
    last = first;
  }

  if (last && !first) {
    first = last;
  }
  n = parseInt(`${first}${last}`, 10);
  return n;
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
};

main();