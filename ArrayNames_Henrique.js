var array = [];

function nomes(a) {
    if (a == 0) {
        return "Henrique";
    } else if (a == 1) {
        return "Jholdy";
    } else if (a == 2) {
        return "Adson";
    } else if (a == 3) {
        return "Gustavo";
    }
    
};

for(let i=0; i<4; i++){
    array[i] = nomes(i);
}

//ordenando alfabeticamente
console.log(array.sort());
