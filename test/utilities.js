import pokemon from '../pokemon.js';

const POKEDEX = 'POKEDEX';

export function findById(array, id) {
    return array.find(item => id === item.id);
}


export function findByName(name) {
    return pokemon.find(poke => name === poke.pokemon);
}

export function encounterPokemon(pokemon) {
    const dex = getDex();
    const matchingPoke = findById(pokemon);
    if(matchingPoke) {
        matchingPoke.encountered++;
    } else {
        const newDexEntry = {
            id: pokemon.pokemon,
            capture: 0,
            encountered: 1
        };
        PC.push(newDexEntry);
    }
    setDex(dex);
    return dex;
}

export function capturePokemon() {


}