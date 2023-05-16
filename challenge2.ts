function myForEach<T>(items: T[], forEachCB: (v: T) => void): void {
  items.reduce((acc, curr) => {
    forEachCB(curr)
    return undefined
  }, undefined)
}

myForEach(['A', 'B', 'C'], v => console.log('custom forEach', v))

function myFilter<T>(items: T[], filterFunc: (v: T) => boolean): T[] {
  return items.reduce(
    (acc: T[], curr) => (filterFunc(curr) ? [...acc, curr] : acc),
    []
  )
}

console.log(myFilter([2, 3, 4, 5, 6, 7, 8, 8], v => v % 2 == 0))

function myMap<T, K>(items: T[], mapFunc: (v: T) => K): K[] {
  return items.reduce((acc, curr) => [...acc, mapFunc(curr)], [] as K[])
}

console.log(myMap([2, 3, 4, 5, 6, 7, 8, 8], v => (v * 10).toString()))
