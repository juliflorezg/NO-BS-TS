interface MyUser {
  name: string
  id: number
  email?: string
  phone?: string
}
// interface MyUserOptionals {
//   name?: string
//   id?: string
//   email?: string
// }
type MyUserOptionals = Partial<MyUser>

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  }
}

console.log(
  merge({ name: 'Jack', id: 3123, email: 'jack@herr.com' }, { id: 7675 })
)

// required
type RequiredMyUser = Required<MyUser>
// pick
type JustEmailAndName = Pick<MyUser, 'email' | 'name'>
//record, Omit, type from key
type MyUserWithoutID = Omit<MyUser, 'id'>
const mapById = (users: MyUser[]): Record<MyUser['id'], MyUserWithoutID> => {
  return users.reduce((acc, curr) => {
    const { id, ...other } = curr
    return { ...acc, [id]: other }
  }, {})
}

const mappedData = mapById([
  { id: 1, name: 'Mr. Foo', email: 'foo@fake.com' },
  { id: 2, name: 'Mrs. Baz', email: 'baz@fake.com' },
])

console.log(mappedData)
