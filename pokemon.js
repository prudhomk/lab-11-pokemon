import pokemon from './data.js';
import { encounterPokemon } from './test/utilities.js';
//import { appearedPoke } from './app.js';

export function findByPokemon(name) {
    return pokemon.find(poke => name === poke.pokemon);
}



export function generatePokemon() {
    let randomNum1 = Math.floor(Math.random() * pokemon.length);
    let randomNum2 = Math.floor(Math.random() * pokemon.length);
    let randomNum3 = Math.floor(Math.random() * pokemon.length);

    while (randomNum1 === randomNum2 || randomNum2 === randomNum3 || randomNum1 === randomNum3) {
        randomNum1 = Math.floor(Math.random() * pokemon.length);
        randomNum2 = Math.floor(Math.random() * pokemon.length);
        randomNum3 = Math.floor(Math.random() * pokemon.length);
    }
    const firstPoke = pokemon[randomNum1];
    
    
    const secondPoke = pokemon[randomNum2];
    
    
    const thirdPoke = pokemon[randomNum3];
    
    encounterPokemon(firstPoke);
    encounterPokemon(secondPoke);
    encounterPokemon(thirdPoke);
    
        
    return [firstPoke, secondPoke, thirdPoke];
}





