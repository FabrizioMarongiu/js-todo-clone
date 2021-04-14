

$(document).ready(function(){

// CREO UNA SORGENTE DATI ESTERNA

var listItems = [
    {
        text : 'latte',
        completed : true,
    },
    {
        text : 'pane',
        completed : false,
    },
    {
        text : 'frutta',
        completed : true,
    },
    {
        text : 'pasta',
        completed : false,
    },
];


// REFERENZE
var list = $('.list');
var input = $('.add');
var template = $('.template li')

/**************************************************************** *1. POPOLAZIONE TO DO LIST
****************************************************************/ 

// Con un ciclo for leggo ogni dato dell'array di oggetti

for( var i = 0; i < listItems.length; i++ ){

    // Creo una variabile che, ad ogni ciclo, salva la posizione dell'oggetto
    var content = listItems[i];

    // Creo un altra variabile dove salvo il percorso che crea il clone della porzione di codice HTML da popolare
    var clone = template.clone();

    // Ricerco l'esatta posizione dove il testo dovrà posizionarsi con ".find()" nel template, mentre aggiungo il testo con text(), dove indico cosa voglio prendere all'interno dell'oggetto per portarlo nell'HTML, in questo caso ".text('content.text)".

    // Questo sarà il NODO che poi andrà posizionato nel DOM
    clone.find('.text').text(content.text);

    /*Prima di posizionare l'elemento facciamo una verifica nell'array della chiave completed. Se la classe è "true"
    dovremo barrare il testo come al punto 4 perchè il punto è stato svolto.
    Lo faremo aggiungendo la classe, esattamente come al punto 4. Se è "true" aggiungiamo la classe, se è "false" lasciamo così com'è*/
    

    if( content.completed ){

        clone.find('.text').addClass('completed');

    }
    



    //Utilizzo la proprietà ".append()" per popolare la lista.
    //il NODO di arrivo è salvato nelle referenze list, quindi unisco nodo di arrivo con il nodo che ha il contenuto da posizionare


    list.append(clone);

}



/**************************************************************** *2. INSERIMENTO TRAMITE INPUT
****************************************************************/

// UTILIZZO KEYUP PER GLI EVENTI DA TASTIERA
input.keyup(function(event){

    // Utilizzo un if che mi dirà quando l'utente premerà invio
    if(event.which === 13){
        // In questo punto cerco di prendere il testo inserito dall'utente. per questo utilizzo ".val()"

        // Creo una variabile dove salverò il nuovo testo, utilizzo TRIM per eliminate gli spazi superflui

        var newText = input.val().trim();

        // Creo un ulteriore controllo nel caso l'utente inserisse una stringa completamente vuota. Utilizzando un if e negando questa opzione posso far eseguire il codice se la stringa non è vuota, in caso contrario non farà nulla
        if( newText !== ''){
            console.log(newText);

            // Creo una variabile che sarà il percorso dentro il template, e l' utilizzo creando un clone
            // Praticamente ".clone()" clona una porzione di codice HTML, pronta da popolare e reindirizzare in un altra parte del dom
            var clone = template.clone();
            // Ora andrò a cercare dal nodo che ho creato con la variabile clone, l'esatta posizione dove inserire il tezto dall'utente
            clone.find('.text').text(newText);
            // Ora con ".append()" dirò dove voglio posizionare questa nuova porzione di codice che ho trovato
            list.append(clone);

             input.val('');
        }
    }
});




/**************************************************************** 
 * 3. RIMOZIONE TODO ITEM
****************************************************************/


// Dobbiamo trovare l'icona che permette la cancellazione

// A questo associo l'evento .click() utilizzando ".on()" per evitare che cancelli solamente le righe di codice che sono state caricate all'avvio dell'applicazione, ma anche quelle che eventualmente implementeremo


// Sintassi:
// ricerca dentro il body HTML
// ".on()" richiama un determinato tipo di evento con altri due parametri:
// Dentro le parentesi ci sarà il tipo di evento, in questo caso "click"
// il nodo HTML da ricercare, in questo caso '.list li il che contiene l'elemento che andrà cliccato
//la funzione o il codice da eseguire

$('body').on('click', '.list li i', function(){

    //una volta trovato l'elemento da cliccare dobbiamo indicare qual'è l'azione da intraprendere
    // In questo caso dobbiamo ricercare tutto il contenuto del li per poterlo eliminare
    // Utilizziamo $('this) per specificare il click solo in un elemento 
    // Utilizziamo ".parent()" per andare al "papà" dell'elemento, in questo caso "li"
    // Utilizziamo ".remove()" per eliminare l'elemento selezionato

    $(this).parent().remove();

});



/**************************************************************** 
 * 4. RENDERE TODO COMPLETATO O DA FARE
****************************************************************/

/* DOBBIAMO FARE IN MODO CHE AL CLICK DELL'ELEMENTO NELLA LISTA
*  SI "DEPENNI" UTILIZZANDO UNA CLASSE CSS CHE VERRA APPLICATA AL * TESTO, AL CLICK DELL'UTENTE. SE CLICCA IL TO DO è COMPLETO*/

// In questo caso dobbiamo agire come del punto precedente, richiamando l'elemento utilizzando once

$('body').on('click', '.text', function(){

    //Una volta individuato il nodo dobbiamo aggiungere o togliere la classe deindividuiamo l'evento con this
    // Utilizziamo toggleClass() per aggiungere o eliminare la classe css dall'elemento HTML

    $(this).toggleClass('completed');

});
















 





    // END DOCUMENT
});