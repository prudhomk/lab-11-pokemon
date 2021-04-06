const POKEDEX = 'POKEDEX';

export function getDex() {
    const stringyDex = localStorage.getItem(POKEDEX);
    if (!stringyDex) return [];

    const parsedDex = JSON.parse(stringyDex);
    return parsedDex;
}

export function setDex(parsedDex) {
    const stringyDex = JSON.stringify(parsedDex);
    localStorage.setItem(POKEDEX, stringyDex);
}

export function createTableRow(dex) {
    const tr = document.createElement('tr');

    const tdPokemon = document.createElement('td');
    tdPokemon.textContent = dex.id;

    const tdEncountered = document.createElement('td');
    tdEncountered.textContent = dex.encountered;

    const tdCaptured = document.createElement('td');
    tdCaptured.textContent = dex.captured;

    tr.append (tdPokemon, tdEncountered, tdCaptured);
    return tr;

}