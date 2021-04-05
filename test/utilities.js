import pokemon from '../data.js';
import { getDex, setDex } from '../local-storage/storage.utilities.js';
const POKEDEX = 'POKEDEX';

export function findById(array, id) {
    return array.find(item => id === item.id);
}


export function findByPokemon(name) {
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
}

export function generatePokemon() {
    let randomNum1 = Math.floor(Math.random() * pokemon.length);
    let randomNum2 = Math.floor(Math.random() * pokemon.length);
    let randomNum3 = Math.floor(Math.random() * pokemon.length);

    while (randomNum1 === randomNum2 || randomNum2 === randomNum3 || randomNum1 === randomNum3) {
        let randomNum1 = Math.floor(Math.random() * pokemon.length);
        let randomNum2 = Math.floor(Math.random() * pokemon.length);
        let randomNum3 = Math.floor(Math.random() * pokemon.length);
    }
    const firstPoke = pokemon[randomNum1];
    encounterPokemon(firstPoke);
    const secondPoke = pokemon[randomNum2];
    encounterPokemon(secondPoke);
    const thirdPoke = pokemon[randomNum3];
    encounterPokemon(thirdPoke);
    return [firstPoke, secondPoke, thirdPoke];
}