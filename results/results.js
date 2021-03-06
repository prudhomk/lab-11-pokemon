import { getDex, createTableRow } from '../local-storage/storage.utilities.js';
import { findById } from '../test/utilities.js';
import pokemon from '../data.js';

const resultsTable = document.querySelector('table');

const dex = getDex();

for (let dexObject of dex) {
    

    const resultsData = createTableRow(dexObject);
    
    resultsTable.append(resultsData);
}


const resetButton = document.getElementById('reset');


resetButton.addEventListener('click', () => {

    localStorage.clear();
    window.location = '../index.html';

});


const names = [];
const captures = [];
const encounters = [];
const type1 = [];
const type2 = [];

for (let poke of pokemon) {
    const matchingPoke = findById(pokemon, poke.id);
    
    type1.push(matchingPoke.type_1);
    type2.push(matchingPoke.type_2);
}

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


let ctx1 = document.getElementById('pieChart').getContext('2d');
let pieChart = new Chart(ctx1, { //eslint-disable-line
    type: 'pie',
    data: {
        labels: names,
        datasets: [{
            label: 'Pokemon Encountered',
            data: encounters,
            backgroundColor: 'red',
            borderColor: 'black'
        },
        {
            label: 'Pokemon Caught',
            data: captures,
            backgroundColor: 'white',
            borderColor: 'black'  
        }]
    },
    hoverOffset: 4
});


