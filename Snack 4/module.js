// jsnack 
// Creare un array che contiene 10 oggetti che rappresentano una zucchina, 
// indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

$(document).ready(function () {

    var zucchine = []

    $(document).keypress(function () { 

        // chiedi all'utente un numero
        do{

            const varieta = prompt('Inserisci varieta di zucchina');
            const peso = prompt('Inserisci il peso della zucchina');
            const lunghezza = prompt('Inserisici il lunghezza della zucchina');
            
            let zucchina = {
                varieta: varieta,
                peso: peso,
                lunghezza: lunghezza
            }

            zucchine.push(zucchina)
            
            do{
                again = prompt('Can you add new team name:\n- t for add new team name\n- n for not add new team name');
            } while( !(again=='t'|| again =='T' || again=='n'|| again ==''))


        }while(again=='t'|| again =='T')

        // stampa a schermo
        var pesoTotale = 0
        $('#listNumber').empty();

        zucchine.forEach( zucchina => {
            item = /*html*/ ` 
                <div class="alert alert-info" role="alert">
                    <p>
                        <p>Varieta: ${zucchina.varieta},</p>
                        <p> Peso: ${zucchina.peso},</p> 
                        <p>lunghezza: ${zucchina.lunghezza},</p> 
                </div>`

            // show in the windows
            $('#listNumber').append(item);
            
            pesoTotale = pesoTotale + parseInt(zucchina.peso)

        });

        var pesoHtml = /*html*/ ` 
                <div class="alert alert-success" role="alert">
                    Il peso totale delle zucchine: ${pesoTotale} 
                </div>`

        $('#listNumber').append(pesoHtml);

    });    
});