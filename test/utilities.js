import pokemon from '../data.js';
import { getDex, setDex } from '../local-storage/storage.utilities.js';
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
    if (matchingPoke) {
        matchingPoke.encountered++;
    } else {
        const newDexEntry = {
            id: pokemon.pokemon,
            capture: 0,
            encountered: 1
        };
        dex.push(newDexEntry);
    }
    setDex(dex);
    return dex;
}

export function capturePokemon() {
    const dex = getDex(dex);
    const pokeMatch = findById(pokemon);
    if (pokeMatch) {
        pokeMatch.encountered++;
    } else {
        const newDexEntry = {
            id: pokemon.pokemon,
            captured: 0,
            encountered: 1
        };
        dex.push(newDexEntry);
    }
    setDex(dex);
    return dex;
}
