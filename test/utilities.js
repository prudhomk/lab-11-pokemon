//import pokemon from '../data.js';
import { getDex, setDex } from '../local-storage/storage.utilities.js';


export function findById(array, id) {
    
    return array.find(item => item.id === id);
}


export function encounterPokemon(pokemon) {
    const dex = getDex();
    
    const matchingPoke = findById(dex, pokemon.pokemon);
    if (matchingPoke) {
        matchingPoke.encountered++;
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


export function capturePokemon(pokemon) {
    const dex = getDex();
    const matchingPoke = findById(dex, pokemon.pokemon);
    matchingPoke.captured++;
    setDex(dex);
    return dex;
    
}




