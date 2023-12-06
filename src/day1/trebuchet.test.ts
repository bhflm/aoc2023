import {describe, expect, test} from 'bun:test';
import { processLine } from './trebuchet';

describe('Should retrieve correct number for processing lines', () => {
  test('9sixsevenz3 => 93', () => {
    const result = processLine("9sixsevenz3");
    expect(result).toBe(93);
  });

  test('ndpdvz2sevenn => 22', () => {
    const result = processLine("ndpdvz2sevenn");
    expect(result).toBe(22);   
  });
  
  test('seven8zllmz => 88', () => {
    const result = processLine("seven8zllmz");
    expect(result).toBe(88);   
  });
  
  test('nineeight3vxrdvttwo => 92', () => {
    const result = processLine("nineeight3vxrdvttwo");
    expect(result).toBe(92);   
  });
  
  test('tntsjnine3jksrrvone => 91', () => {
    const result = processLine("tntsjnine3jksrrvone");
    expect(result).toBe(91);   
  });

  test('three8sdone => 31', () => {
    const result = processLine("three8sdone");
    expect(result).toBe(31);      
  });

  test('nine4nine => 99', () => {
    const result = processLine("nine4nine");
    expect(result).toBe(99);      
  });

  test('fourvone2vbpltlrj => 42', () => {
    const result = processLine("fourvone2vbpltlrj");
    expect(result).toBe(42);      
  });

  test('two1nine => 29', () => {
    const result = processLine("two1nine");
    expect(result).toBe(29);        
  })

  test('eightwothree => 83', () => {
    const result = processLine("eightwothree");
    expect(result).toBe(83);
  });
  
  test('abcone2threexyz', () => {
    const result = processLine("abcone2threexyz");
    expect(result).toBe(13);
  });
  test('xtwone3four', () => {
    const result = processLine("xtwone3four");
    expect(result).toBe(24);
  });
  test(' 4nineeightseven2 ', () => {
    const result = processLine("4nineeightseven2");
    expect(result).toBe(42);
  });
  test('zoneight234', () => {
    const result = processLine("zoneight234");
    expect(result).toBe(14);
  });
  test('7pqrstsixteen', () => {
    const result = processLine("7pqrstsixteen");
    expect(result).toBe(76);
  });

  test('eightree', () => {
    const result = processLine("eightree");
    expect(result).toBe(83);  
  })

  test('sevenine', () => {
    const result = processLine("sevenine");
    expect(result).toBe(79);
  })

})