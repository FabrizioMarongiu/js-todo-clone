

$(document).ready(function(){

// CREO UNA SORGENTE DATI ESTERNA

var listItems = [
    {
        text : 'latte',
        completed : 'true',
    },
    {
        text : 'pane',
        completed : 'false',
    },
    {
        text : 'frutta',
        completed : 'true',
    },
    {
        text : 'pasta',
        completed : 'false',
    },
];


// REFERENZE
var list = $('.list');
var input = $('.add');
var text = $('.text');
var template = $('.template li')

/**************************************************************** POPOLAZIONE TO DO LIST
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

    //Utilizzo la proprietà ".append()" per popolare la lista.
    //il NODO di arrivo è salvato nelle referenze list, quindi unisco nodo di arrivo con il nodo che ha il contenuto da posizionare
    list.append(clone);

}



/**************************************************************** INSERIMENTO TRAMITE INPUT
****************************************************************/

// UTILIZZO KEYUP PER GLI EVENTI DA TASTIERA
input.keyup(function(event){
    console.log(event.which);
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
})




/**************************************************************** 
 * 
****************************************************************/

























 





    // END DOCUMENT
});