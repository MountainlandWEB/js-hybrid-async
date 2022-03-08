describe('async', () => {
    let pokemonService;
  
    beforeEach(() => {
      pokemonService = new PokemonService();
    });
  
    describe('getAllPokemon', () => {
      it('should get all pokemon correctly', done => {
        pokemonService.getAllPokemon().then(pokemon => {
          expect(pokemon.length).toEqual(4);
          done();
        }).catch(error => done());
      });
    });
  
    describe('getPokemonById', () => {
      it('should get Blastoise correctly', done => {
        pokemonService.getPokemonById(2).then(pokemon => {
          expect(pokemon.name).toEqual('Blastoise');
          done();
        }).catch(error => done());
      });

      it('should get Piplup correctly', done => {
        pokemonService.getPokemonById(3).then(pokemon => {
          expect(pokemon.name).toEqual('Piplup');
          done();
        }).catch(error => done());
      });
    });
  });
  