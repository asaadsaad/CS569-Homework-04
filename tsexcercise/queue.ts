class Queue<T> {
  private list: Array<T> = [];
  push(item: T) {
    return this.list.push(item);
  }
  pop() {
    this.list.pop();
  }
  print(): T[] {
    return this.list;
  }
}
const queue = new Queue<number>();
console.log(queue.print());
queue.push(0);
queue.push(1);
console.log(queue.print());
