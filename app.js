import { capturePokemon, generatePokemon, findByPokemon } from './test/utilities.js';

const spot1 = document.querySelector('spot1');
const spot2 = document.querySelector('spot2');
const spot3 = document.querySelector('spot3');

const label1 = document.querySelector('label1');
const label2 = document.querySelector('label2');
const label3 = document.querySelector('label3');

const button = document.getByElementId('button');

function pokemonBattle() {
    const wildGrass = generatePokemon();
    const img1 = document.createElement('img');
    img1.src = wildGrass[0].url_image;
    spot1.value = wildGrass[0].pokemon;
    label1.append(img1);

    const img2 = document.createElement('img');
    img2.src = wildGrass[1].url_image;
    spot2.value = wildGrass[1].pokemon;
    label2.append(img2);

    const img3 = document.createElement('img');
    img3.src = wildGrass[2].url_image;
    spot3.value = wildGrass[2].pokemon;
    label3.append(img3);
}


button.addEventListener('click', () => {
    const selectedPoke = document.querySelector('input: checked');
    const dexEntry = findByPokemon(selectedPoke.value);
    
    capturePokemon(dexEntry);
    pokemonBattle();
});




