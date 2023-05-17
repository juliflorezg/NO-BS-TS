// create a noSQL style simple in-memory database
{
  interface Database<T, K> {
    get: (id: K) => T
    set: (id: K, value: T) => void
  }

  //? extending class: make a persistable database (we can read and write state from a string)
  interface Persistable {
    saveToString(): string
    restoreFromString(storedState: string): void
  }

  type DBKeyType = string | number | symbol

  class InMemoryDatabase<T, K extends DBKeyType> implements Database<T, K> {
    //create a database member
    //> change member visibility of my db from public to private (only this class can see it)
    protected db: Record<K, T> = {} as Record<K, T>

    get(id: K): T {
      return this.db[id]
    }
    set(id: K, value: T) {
      this.db[id] = value
    }
  }

  //* create an in-memory persistable database
  class PersistentMemoryDB<T, K extends DBKeyType>
    extends InMemoryDatabase<T, K>
    implements Persistable
  {
    saveToString(): string {
      return JSON.stringify(this.db) //> to properly use this.db we must change 'db' visibility to protected in parent class
    }
    restoreFromString(storedState: string): void {
      this.db = JSON.parse(storedState)
    }
  }

  const myDB = new InMemoryDatabase<number, string>()

  myDB.set('a1', 56 + 13)
  //! we can set this manually ! to fix this, change its visibility in the class ⬆️
  // myDB.db['a1'] = 'BBB'
  console.log(myDB.get('a1'))

  const myDB2 = new PersistentMemoryDB<number, string>()
  myDB2.set('a1', 34)
  console.log(myDB2.get('a1'))
  const saved = myDB2.saveToString()

  const myDB3 = new PersistentMemoryDB<number, string>()
  myDB3.restoreFromString(saved)
  console.log(myDB3.get('a1'))
}
