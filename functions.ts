function addNumbers(a: number, b: number): number {
  return a + b
}
export default addNumbers

export const addStrings = (str1: string, str2: string = ''): string =>
  `${str1} ${str2}`

//union types

export const format = (title: string, param: string | number): string =>
  `${title} ${param}`

// function that doesn't return anything (void)

export const printFormat = (title: string, param: string | number): void =>
  console.log(format(title, param))

// function that returns a promise

export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`)

// rest parameters
export function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(' ')}`
}

//typescript just enforces type safety at compile time, not at runtime
//* use of optional chaining ?.
export function getName(user: { first: string; last: string }): string {
  return `${user?.first ?? 'first'} ${user?.last ?? 'last'}`
}
