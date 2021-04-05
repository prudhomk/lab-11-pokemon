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