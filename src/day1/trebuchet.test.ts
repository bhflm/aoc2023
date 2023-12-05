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
  
  test('nineeight3vxrdvttwo => 33', () => {
    const result = processLine("nineeight3vxrdvttwo");
    expect(result).toBe(33);   
  });
  
  test('tntsjnine3jksrrvone => 33', () => {
    const result = processLine("tntsjnine3jksrrvone");
    expect(result).toBe(33);   
  });

  test('three8sdone => 88', () => {
    const result = processLine("three8sdone");
    expect(result).toBe(88);      
  });

  test('nine4nine => 44', () => {
    const result = processLine("nine4nine");
    expect(result).toBe(44);      
  });

  test('fourvone2vbpltlrj => 22', () => {
    const result = processLine("fourvone2vbpltlrj");
    expect(result).toBe(22);      
  });

})