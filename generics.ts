function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial
  return [() => val, (v: T) => (val = v)]
}

const [state1getter, state1setter] = simpleState('lol')
console.log(state1getter())
state1setter('70')
console.log(state1getter())

const [state2getter, state2setter] = simpleState<string | null>(null)

console.log(state2getter())
state2setter('str')
console.log(state2getter())

interface Rank<RankItem> {
  item: RankItem
  rank: number
}
function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map(item => ({
    item,
    rank: rank(item),
  }))

  ranks.sort((a, b) => a.rank - b.rank)

  return ranks.map(rankItem => rankItem.item)
}

interface Pokemon {
  name: string
  hp: number
}

const pokemon: Pokemon[] = [
  { name: 'Bulbasaur', hp: 20 },
  { name: 'Charizard', hp: 50 },
]

const ranks = ranker(pokemon, ({ hp }) => hp)

console.log(ranks)
