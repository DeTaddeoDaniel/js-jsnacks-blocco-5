// jsnack 2
// Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: 
//  - nome, 
//  - punti fatti
//  - falli subiti

// Nome sarà l’unica proprietà da compilare, le altre saranno 
// tutte settate a 0.

// Generare numeri random al posto degli 0 
// nelle proprietà: Punti fatti e falli subiti

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}

$(document).ready(function () {

    var teams = []

    $(document).keypress(function () { 

        // chiedi all'utente un numero
        do{

            const name = prompt('Add the name of team');
            
            let team = {
                name: name,
                puntiFatti: 0,
                falliSubiti: 0
            }

            team.puntiFatti= getRandomInt(0, 100),
            team.falliSubiti= getRandomInt(0, 100)
            

            teams.push(team)
            
            do{
                again = prompt('Can you add new team name:\n- t for add new team name\n- n for not add new team name');
            } while( !(again=='t'|| again =='T' || again=='n'|| again ==''))


        }while(again=='t'|| again =='T')

        // stampa a schermo
        teams.forEach( team => {
            item = /*html*/ ` 
                <div class="alert alert-info" role="alert">
                    <p>
                        <p>Team: ${team.name},</p>
                        <p> punti fatti: ${team.puntiFatti},</p> 
                        <p>falli subiti: ${team.falliSubiti},</p> 
                </div>`

            // show in the windows
            $('#listNumber').append(item);

        });


    });    
});