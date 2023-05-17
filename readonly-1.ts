//> we can use readonly in interfaces fields
// interface Cat {
//   readonly name: string
//   breed: string
// }

interface Cat {
  name: string
  breed: string
}

type ReadonlyCat = Readonly<Cat>

function makeCat(name: string, breed: string): ReadonlyCat {
  return {
    name,
    breed,
  }
}

const usul = makeCat('Usul', 'Tabby')
usul.name = 'Piter'

function makeCoordinate(
  x: number,
  y: number,
  z: number
): readonly [number, number, number] {
  return [x, y, z]
}

const c1 = makeCoordinate(32, 46, 83)
c1[0] = 56 // ! we cannot change its values bc it's readonly

//> the contents of this array are also constant, so we get an inmutable array 
const reallyConst = [1,2,3] as const 

reallyConst[1] = 40
