import houses from './houses.json'

interface House {
  name: string
  planets: string | string[]
}

interface HouseWithID extends House {
  id: string
}
// const houses: House[] = [
//   { name: 'Atreides', planets: 'Calladan' },
//   { name: 'Corrino', planets: ['Kaitan', 'Salusa Secundus'] },
//   { name: 'Harkonnen', planets: ['Giedi Prime', 'Arrakis'] },
// ]

function findHouses(houses: string): HouseWithID[]
function findHouses(
  houses: string,
  filter: (house: House) => boolean
): HouseWithID[]
function findHouses(houses: House[]): HouseWithID[]
function findHouses(
  houses: House[],
  filter: (house: House) => boolean
): HouseWithID[]

function findHouses(arg1: string | House[], arg2?: (house: House) => boolean) {
  if (typeof arg1 === 'string' && !arg2) {
    return (JSON.parse(arg1) as House[]).map(house => ({
      ...house,
      id: String(Math.random() * 60),
    }))
  } else if (typeof arg1 === 'string' && arg2) {
    return (JSON.parse(arg1) as House[]).filter(arg2).map(house => ({
      ...house,
      id: String(Math.random() * 60),
    }))
  } else if (typeof arg1 !== 'string' && !arg2) {
    return arg1.map(house => ({
      ...house,
      id: String(Math.random() * 60),
    }))
  } else if (typeof arg1 !== 'string' && arg2) {
    return arg1.filter(arg2).map(house => ({
      ...house,
      id: String(Math.random() * 60),
    }))
  }
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === 'Atreides')
)

console.log(findHouses(houses, ({ name }) => name === 'Harkonnen'))
