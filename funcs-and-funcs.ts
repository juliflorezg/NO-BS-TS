export function printToFile(text: string, callback: () => void): void {
  console.log(text)
  callback()
}

export type MutationFunction = (v: number) => number

export function arrayMutate(
  nums: number[],
  mutate: MutationFunction
): number[] {
  return nums.map(mutate)
}

console.log(arrayMutate([1, 20, 4], n => n * 5))

export const myNewMutateFunc: MutationFunction = (value: number) => value + 69

export type AdderFunction = (v: number) => number

//functions that return functions
export function createAdder(num: number): AdderFunction {
  return (value: number) => num + value
}

const addThree = createAdder(3)
console.log(addThree(66))
