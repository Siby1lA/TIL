const a = "5";
const b: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: any = 123;
const g: true = true;
const h: 5 = 5;

function add(x: number, y: number): number {
  return x + y;
}
type Add = (x: number, y: number) => number;
const add2: Add = (x, y) => x + y;
const add3: (x: number, y: number) => number = (x, y) => x + y;
const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };
const arr: string[] = ["12", "12"];
const arr2: number[] = [12, 12];
const arr3: Array<number> = [12, 123]; //제네릭
const arr4: [number, string, number] = [1, "1", 1]; //튜플

const head: Element = document.querySelector("#head")!;

const obj2 = { a: "123", b: "hello", c: "wolrd" } as const;
type Key = typeof obj2[keyof typeof obj2];
