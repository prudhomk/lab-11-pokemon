import { getDex, createTableRow } from '../local-storage/storage.utilities.js';
const resultsTable = document.querySelector('table');

const dex = getDex();

//for (let dexObject of dex) {
//    console.log(dexObject);
//
//    const resultsData = createTableRow(dexObject);
//    
//    resultsTable.append(resultsData);
//}


const resetButton = document.getElementById('reset');


resetButton.addEventListener('click', () => {

    localStorage.clear();
    window.location = '../index.html';

});


const names = [];
const captures = [];
const encounters = [];

for (let pokemon of dex) {
    names.push(pokemon.id);
    captures.push(pokemon.captured);
    encounters.push(pokemon.encountered);
}

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, { //eslint-disable-line
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: 'Pokemon Captured',
            data: captures,
            backgroundColor: 'red',
               
            borderColor: 'pink',
            borderWidth: 1
        },
        {
            label: 'Pokemon Encountered',
            data: encounters,
            backgroundColor: 'blue',
            borderColor: 'purple',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
