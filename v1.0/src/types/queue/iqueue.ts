export interface IQueue<T> {
  head: T | null;
  tail: T | null;
  enqueue(T: T): void;
  dequeue(): void;
  jump(T: T): void;
}
