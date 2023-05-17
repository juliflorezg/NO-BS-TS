// create a noSQL style simple in-memory database

interface Database {
  get: (id: string) => string
  set: (id: string, value: string) => void
}

//? extending class: make a persistable database (we can read and write state from a string)
interface Persistable {
  saveToString(): string
  restoreFromString(storedState: string): void
}

class InMemoryDatabase implements Database {
  //create a database member
  //> change member visibility of my db from public to private (only this class can see it)
  protected db: Record<string, string> = {}

  get(id: string): string {
    return this.db[id]
  }
  set(id: string, value: string) {
    this.db[id] = value
  }
}

//* create an in-memory persistable database
class PersistentMemoryDB extends InMemoryDatabase implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db) //> to properly use this.db we must change 'db' visibility to protected in parent class
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState)
  }
}

const myDB = new InMemoryDatabase()

myDB.set('a1', 'AAA')
//! we can set this manually ! to fix this, change its visibility in the class ⬆️
// myDB.db['a1'] = 'BBB'
console.log(myDB.get('a1'))

const myDB2 = new PersistentMemoryDB()
myDB2.set('a1', 'AAA')
console.log(myDB2.get('a1'))
const saved = myDB2.saveToString()

const myDB3 = new PersistentMemoryDB()
myDB3.restoreFromString(saved)
console.log(myDB3.get('a1'))
