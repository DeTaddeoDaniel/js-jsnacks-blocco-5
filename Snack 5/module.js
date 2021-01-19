// jsnack 5
// Creare  un array che contiene 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. 
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

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
        let pesoZucchineMinori= 0;
        let pesoZucchineMaggiori= 0
        
        $('#listNumber').empty();
        let item;

        zucchine.forEach( zucchina => {

            if(parseInt(zucchina.lunghezza) >= 15){
                item = /*html*/ ` 
                    <div class="alert bg-primary text-white" role="alert">
                        <p>
                            <p>Varieta: ${zucchina.varieta},</p>
                            <p> Peso: ${zucchina.peso} kg,</p> 
                            <p>lunghezza: ${zucchina.lunghezza} cm,</p> 
                    </div>`

                    pesoZucchineMaggiori = pesoZucchineMaggiori + parseFloat(zucchina.peso)
            
            } else {
                item = /*html*/ `  
                    <div class="alert bg-secondary text-white" role="alert">
                        <p>
                            <p>Varieta: ${zucchina.varieta},</p>
                            <p> Peso: ${zucchina.peso},</p> 
                            <p>lunghezza: ${zucchina.lunghezza},</p> 
                    </div>`
                
                pesoZucchineMinori = pesoZucchineMinori + parseFloat(zucchina.peso)
            }

            // show in the windows
            $('#listNumber').append(item);
            
            pesoTotale = pesoTotale + parseFloat(zucchina.peso)

        });

        var pesoHtml = /*html*/ ` 
                <div class="alert bg-success text-white" role="alert">
                    Il peso totale delle zucchine: ${pesoTotale} kg
                </div>
                <div class="alert bg-success text-white" role="alert">
                    Il peso totale delle zucchine < 15cm: ${pesoZucchineMinori} kg
                </div>
                <div class="alert bg-success text-white" role="alert">
                    Il peso totale delle zucchine > 15 cm: ${pesoZucchineMaggiori} kg
                </div>
                `

        $('#listNumber').append(pesoHtml);

    });    
});