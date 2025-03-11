import {Deque} from './deque';

describe('Deque Class', () => {
  it('should initialize with default capacity', () => {
    const deque = new Deque<number>();
    expect(deque.size).toBe(0);
  });

  it('should initialize with custom capacity', () => {
    const deque = new Deque<number>(32);
    expect(deque.size).toBe(0);
  });

  it('should initialize with array input', () => {
    const deque = new Deque<number>([1, 2, 3]);
    expect(deque.size).toBe(3);
    expect(deque.pop()).toBe(3);
    expect(deque.shift()).toBe(1);
  });

  it('should push elements correctly', () => {
    const deque = new Deque<number>();
    deque.push(1);
    deque.push(2);
    expect(deque.size).toBe(2);
    expect(deque.pop()).toBe(2);
    expect(deque.pop()).toBe(1);
  });

  it('should pop elements correctly', () => {
    const deque = new Deque<number>([1, 2, 3]);
    expect(deque.pop()).toBe(3);
    expect(deque.pop()).toBe(2);
    expect(deque.pop()).toBe(1);
    expect(deque.pop()).toBeUndefined();
  });

  it('should shift elements correctly', () => {
    const deque = new Deque<number>([1, 2, 3]);
    expect(deque.shift()).toBe(1);
    expect(deque.shift()).toBe(2);
    expect(deque.shift()).toBe(3);
    expect(deque.shift()).toBeUndefined();
  });

  it('should handle shift with skipNull option', () => {
    const deque = new Deque<number | null>([null, 2, null, null, 3]);
    expect(deque.shift(true)).toBe(2);
    expect(deque.shift(true)).toBe(3);
    expect(deque.shift(true)).toBeUndefined();
  });

  it('should remove element at specified index', () => {
    const deque = new Deque<number>([1, 2, 3, 4]);
    expect(deque.removeAt(1)).toBe(2); // Remove 2
    expect(deque.size).toBe(3);
    expect(deque.pop()).toBe(4);
    expect(deque.shift()).toBe(1);
    expect(deque.shift()).toBe(3);
  });

  it('should return undefined for invalid removeAt index', () => {
    const deque = new Deque<number>([1, 2, 3]);
    expect(deque.removeAt(-1)).toBeUndefined();
    expect(deque.removeAt(3)).toBeUndefined();
    expect(deque.size).toBe(3);
  });

  it('should resize capacity when needed', () => {
    const deque = new Deque<number>(16);
    for (let i = 0; i < 20; i++) {
      deque.push(i);
    }
    expect(deque.size).toBe(20);
    expect(deque.pop()).toBe(19);
    expect(deque.shift()).toBe(0);
  });

  it('should handle circular buffer behavior', () => {
    const deque = new Deque<number>(4, true);
    deque.push(1);
    deque.push(2);
    deque.push(3);
    deque.shift(); // Remove 1
    deque.push(4);
    deque.push(5);
    expect(deque.size).toBe(4);
    expect(deque.pop()).toBe(5);
    expect(deque.shift()).toBe(2);
  });
});
