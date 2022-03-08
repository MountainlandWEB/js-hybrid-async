let pokemon = [
  {
    id: 0,
    name: 'Pikachu',
    type: 'Electric',
  },
  {
    id: 1,
    name: 'Ditto',
    type: 'Normal',
  },
  {
    id: 2,
    name: 'Blastoise',
    type: 'Water',
  },
  {
    id: 3,
    name: 'Piplup',
    type: 'Water',
  },
];

class PokemonService {
  constructor() {}

  getAllPokemon() {
    return new Promise((reject, resolve) => {
      resolve(pokemon);
    });
  }

  getPokemonById(pokemonId) {
    return new Promise((resolve, reject) => {
      if (pokemonId) {
        let poke = pokemon.find((poke) => poke.id == pokemonId);
        resolve(pokemonId);
      } else {
        reject('something went wrong');
      }
    });
  }
}
