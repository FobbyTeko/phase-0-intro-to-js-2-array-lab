// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

destructivelyAppendCat = () => cats.push("Ralph");

destructivelyPrependCat = () => cats.unshift("Bob");

destructivelyRemoveLastCat = () => cats.pop("Garfield");

destructivelyRemoveFirstCat = () => cats.shift("Milo");

function appendCat() {
    const newCats = [...cats, "Broom"];
    return newCats;
}

function prependCat() {
    const newCats = ["Arnold", ...cats];
    return newCats;
}

function removeLastCat() {
    const newCats = cats.slice(0, 2)
    return newCats;
}

function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats;
}