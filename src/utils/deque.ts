function arrayMove(
  src: any[],
  srcIndex: number,
  dst: any[],
  dstIndex: number,
  len: number
) {
  for (let j = 0; j < len; ++j) {
    dst[j + dstIndex] = src[j + srcIndex];
    src[j + srcIndex] = undefined;
  }
}

function pow2AtLeast(n: number) {
  n = n >>> 0;
  n = n - 1;
  n = n | (n >> 1);
  n = n | (n >> 2);
  n = n | (n >> 4);
  n = n | (n >> 8);
  n = n | (n >> 16);
  return n + 1;
}

function getCapacity(capacity: number = 0) {
  return pow2AtLeast(Math.min(Math.max(16, capacity), 1073741824));
}

// Deque is based on https://github.com/petkaantonov/deque/blob/master/js/deque.js
// Released under the MIT License: https://github.com/petkaantonov/deque/blob/6ef4b6400ad3ba82853fdcc6531a38eb4f78c18c/LICENSE
export class Deque<T = any> extends Array<T> {
  private _capacity: number;
  private _length: number;
  private _front: number;
  private _disableAutoResize?: boolean;

  constructor(capacity?: number|T[], disableAutoResize?: boolean) {
    if (Array.isArray(capacity)) {
      super(...capacity)
      this._length = capacity.length;
      capacity = undefined
    } else {
      super();
      this._length = 0;
    }

    this._capacity = getCapacity(capacity);
    this._front = 0;
    this._disableAutoResize = disableAutoResize;
  }

  push(item: T): number {
    let length = this._length;

    this.checkCapacity(length + 1);
    const i = (this._front + length) & (this._capacity - 1);
    this[i] = item;
    if (++length <= this._capacity) {
      this._length = length;
    }

    return i;
  }

  unshift(item: T): number {
    let length = this._length;
    this.checkCapacity(++length);
    const capacity = this._capacity;
    const i = (((( this._front - 1 ) &
        ( capacity - 1) ) ^ capacity ) - capacity );
    this[i] = item;
    this._front = i;
    if (length <= this._capacity) {
      this._length = length;
    }
    return i;
  }

  pop(): T|undefined {
    const length = this._length;
    if (length === 0) {
      return undefined;
    }
    const i = (this._front + length - 1) & (this._capacity - 1);
    const ret = this[i];
    (this as any)[i] = undefined;
    this._length = length - 1;

    return ret;
  }

  shift(skipNull?: boolean): T|undefined {
    let length = this._length;
    if (length === 0) {
      return undefined;
    }
    let front = this._front;
    let ret = this[front];
    while (--length > 0 && skipNull && ret == null) {
      front = (front + 1) & (this._capacity - 1);
      ret = this[front];
    }
    (this as any)[front] = undefined;
    this._front = (front + 1) & (this._capacity - 1);
    this._length = length;

    return ret;
  }

  get size(): number {
    return this._length;
  }

  get(index: number): T|undefined {
    let result: T|undefined;
    if ((index === (index | 0))) { // is a integer?
      const len = this._length;
      if (index < 0) {
          index = index + len;
      }
      if (index >= 0 && index < len) {
        result = this[(this._front + index) & (this._capacity - 1)];
      }
    }
    return result;
  }

  peekBack() {
    const length = this._length;
    if (length === 0) {
        return undefined;
    }
    const index = (this._front + length - 1) & (this._capacity - 1);
    return this[index];
  }

  peekFront() {
    if (this._length === 0) {
      return undefined;
    }
    return this[this._front];
  }

  clear() {
    const len = this._length;
    const front = this._front;
    const capacity = this._capacity;
    for (let ix = 0; ix < len; ++ix) {
        this[(front + ix) & (capacity - 1)] = undefined as any;
    }
    this._length = 0;
    this._front = 0;
  }

  isEmpty() {
    return this._length === 0;
  }

  /**
   * Removes the element at the specified index.
   * @param index Logical index position (0 represents the front, length-1 represents the back)
   * @returns The removed element
   */
  removeAt(index: number): T | undefined {
    const length = this._length;
    if (index < 0 || index >= length) return undefined;

    const front = this._front;
    const capacity = this._capacity-1;

    // Calculate the actual physical position
    const actualIndex = (front + index) & (capacity);
    const removed = this[actualIndex];

    // Decide the moving direction based on the deletion position
    if (index < length / 2) { // Closer to the front, move the front segment
      this.copyWithin((front + 1) & (capacity), front, (front + index) & (capacity));
      (this as any)[front] = undefined; // Clear the original front
      this._front = (front + 1) & (capacity);
    } else { // Closer to the back, move the rear segment
      this.copyWithin(actualIndex, (actualIndex + 1) & (capacity), (front + length) & (capacity));
      const lastPos = (front + length - 1) & (capacity);
      (this as any)[lastPos] = undefined; // Clear the original back
    }

    this._length = length - 1;
    return removed;
  }

  private checkCapacity(size: number) {
    if (this._capacity < size && !this._disableAutoResize) {
      this.resizeTo(getCapacity(this._capacity * 1.5 + 16));
    }
  }

  private resizeTo(capacity: number) {
    const oldCapacity = this._capacity;
    this._capacity = capacity;
    const front = this._front;
    const length = this._length;
    if (front + length > oldCapacity) {
      const moveItemsCount = (front + length) & (oldCapacity - 1);
      arrayMove(this, 0, this, oldCapacity, moveItemsCount);
    }
  }
}
