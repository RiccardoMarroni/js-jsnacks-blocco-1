let vettore = parseInt(prompt('quanti numeri vuoi creare'))
somma = 0;
valori = getRndInteger(0,100)

for(let i=0; i<vettore; i++){

    let nuovoVettore = []

    for (let j=nuovoVettore; j > nuovoVettore - 6; j-- ){

        nuovoVettore.push(valori)
        somma += nuovoVettore[j]
        
    }
}

console.log([somma])