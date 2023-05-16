// key must be one of the keys of DataType
function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map(item => item[key])
}

const dogs = [
  { name: 'Mimi', age: 4 },
  { name: 'Lol', age: 2 },
]

console.log(pluck(dogs, 'age')) // [4,2]
console.log(pluck(dogs, 'name')) // ["Mimi",  "Lol"]

////////// create an event map //////////

interface BaseEvent {
  time: number
  user: string
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productId: string }
  checkout: BaseEvent
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log({name, data})
}

sendEvent('addToCart', { productId: 'foo', user: 'Baz', quantity: 3, time: 10 })
sendEvent('checkout', { time: 20, user: 'fer' })
