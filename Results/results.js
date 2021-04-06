import { getDex } from '../local-storage/storage.utilities.js';



const captureRate = document.getElementById('caught');
const wildPokemon = document.getElementById('encountered');
const resetButton = document.getElementById('reset');

captureRate.textContent = (getDex().captured);
wildPokemon.textContent = (getDex().encountered);


resetButton.addEventListener('click', () => {

    localStorage.clear();
    window.location = '/Users/kalanprudhomme/alchemy/lab-11-pokemon/index.html';

});
