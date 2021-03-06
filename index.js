// JavaScript Array

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return item;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    if (typeof index !== 'number' || index < 0 || index >= this.length) {
      throw Error('No such index');
    }
    const deletedItem = this.data[index];

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];

    this.length--;

    return deletedItem;
  }
}

const arr = new MyArray();
arr.push('apple');
arr.push('lemon');
arr.push('kiwi');
arr.push('orange');
console.log(arr);
arr.delete(0);
console.log(arr);
