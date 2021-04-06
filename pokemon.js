import pokemon from './data.js';
import { encounterPokemon } from './test/utilities.js';


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
    encounterPokemon(firstPoke);
    
    const secondPoke = pokemon[randomNum2];
    encounterPokemon(secondPoke);
    
    const thirdPoke = pokemon[randomNum3];
    encounterPokemon(thirdPoke);
    
 
    return [firstPoke, secondPoke, thirdPoke];
}

export function shuffle(array) {
    let i = array.length;
    let j = 0;
        
    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const randomNumbers = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
console.log(randomNumbers);
