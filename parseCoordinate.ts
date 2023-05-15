interface Coordinate {
  x: number
  y: number
}

// function parseCoordinateFromObject(obj: Coordinate): Coordinate {
//   return {
//     ...obj,
//   }
// }

// function parseCoordinateFromNumbers(x: number, y: number) {
//   return { x, y }
// }

function parseCoordinate(str: string): Coordinate
function parseCoordinate(obj: Coordinate): Coordinate
function parseCoordinate(x: number, y: number): Coordinate
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  }

  if (typeof arg1 === 'string') {
    ;(arg1 as string).split(',').forEach(str => {
      const [key, value] = str.split(':')

      coord[key as 'x' | 'y'] = Number(value)
      coord[key as keyof Coordinate] = Number(value)
    })
  } else if (typeof arg1 === 'object') {
    coord = {
      //treating and unknown value (arg1) as something we know (Coordinate)
      ...(arg1 as Coordinate),
    }
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    }
  }

  return coord
}

console.log(parseCoordinate(10, 20))
console.log(parseCoordinate({ x: 3, y: 55 }))
console.log(parseCoordinate('x:3,y:55'))
