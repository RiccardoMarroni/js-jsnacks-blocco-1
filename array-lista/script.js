
let frigo = [
    'banana', 'mela', 'pera', 'ciliegia', 
    'arancia', 'mandarino', 'cocomero', 
    'limone', 'fragola' 
]

frigo.push('pesca');

let frutta = prompt('inserisci nome frutta');
let flag = false;

    for(let i=0; i<=frigo.length; i++){

        if( frutta === frigo[i]){
            flag = true;
            console.log("Trovato! Devo solo preparare il cocktail.")
        } 
        else (
            console.log("Oh no, devo uscire a comprare il cocomero!")
        )
      }

      