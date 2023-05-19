// type MyFlexibleDogInfo = {
//   name: string
// } & Record<string, string>

type MyFlexibleDogInfo = {
  name: string
  [key: string]: string | number
}

const dog: MyFlexibleDogInfo = {
  name: 'Bruno',
  breed: 'german shepherd',
  age: 5,
}

interface DogInfo {
  name: string
  age: number
}

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean
}

//> type OptionsFlags<Type> </Type>
type DogInfoOptions = OptionsFlags<DogInfo>

type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<Property & string>}Change`]?: (
    newValue: Type[Property]
  ) => void
} & {
  [Property in keyof Type as `on${Capitalize<
    Property & string
  >}Delete`]?: () => void
}

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
  throw 'needs to be implemented'
}

type DogInfoListeners = Listeners<DogInfo>

const lol: DogInfo = {
  name: 'lol',
  age: 6,
}

listenToObject(lol, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
  onNameDelete: () => {},
  onAgeDelete: () => {},
})
