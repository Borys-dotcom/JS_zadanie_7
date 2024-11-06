class Book{
    constructor(tytul, autor, przeczytana){
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }

    opiszKsiazke(){
        let message = '';
        message = `Książka ma tytuł ${this.tytul}, autorem jest: ${this.autor} i `
        if (this.przeczytana){
            message += `została przeczytana.`;
        }
        else 
            message += `nie została przeczytana.`
        console.log(message);
    }
}

let book1 = new Book("Wiedźmin", "Andrzej Sapkowski", false);
let book2 = new Book("Harry Potter", "J. K. Rowling", false);
let book3 = new Book("Hobbit", "J. R. R. Tolkien", true);

let tablicaKsiazek = [book1, book2, book3];

function iloscPrzeczytanych(tablica){
    let przeczytane = 0;
    
    for (i=0; i<tablica.length; i++){
        if (tablica[i].przeczytana) przeczytane++;
        tablica[i].opiszKsiazke();
    }
    return przeczytane;
}

console.log(iloscPrzeczytanych(tablicaKsiazek));