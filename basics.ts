let username: string = 'Juli'
let hasLoggedIn: boolean = true
// ctrl k + ctrl i when selected to show variable type

hasLoggedIn += ' Florez' //! error Type 'string' is not assignable to type 'boolean'.

console.log(hasLoggedIn)

let myRegex: RegExp = /foo/

//Typing arrays
const names: string[] = username.split(' ')
const myValues: Array<number> = [1, 2, '3']

//Typing objects
interface Person {
  first: string
  last: string
}

const person: Person = {
  first: 'Juli',
  last: 'Florez',
  // cool: true,
}

//typing maps
const ids: Record<number, string> = {
  10: 'a',
  20: 'b',
}
ids[30] = 'c'

//conditionals
if (ids[30] === 'd') {
}

//loops
//* type is inferred
for (let i = 0; i < 10; i++) {
  console.log(i)
}

;[1, 2, 3, 4].forEach(v => console.log(v))

const values: number[] = [10, 20, 30].map(num => num * 10)
