import { getDex, createTableRow } from '../local-storage/storage.utilities.js';
const resultsTable = document.querySelector('table');

const dex = getDex();

for (let dexObject of dex) {
    console.log(dexObject);

    const resultsData = createTableRow(dexObject);
    
    resultsTable.append(resultsData);
}



const resetButton = document.getElementById('reset');


resetButton.addEventListener('click', () => {

    localStorage.clear();
    window.location = '/Users/kalanprudhomme/alchemy/lab-11-pokemon/index.html';

});
