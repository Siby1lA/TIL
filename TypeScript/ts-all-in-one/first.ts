// map 타입
interface Array<T> {
  map<U>(
    callbackfn: (value: T, index: number, array: T[]) => U,
    thisArg?: any
  ): U[];
}
const strings = [1, 2, 3].map((item) => item.toString());
