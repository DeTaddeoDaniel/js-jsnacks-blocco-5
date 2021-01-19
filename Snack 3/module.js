// jsnack 3
// Creare un oggetto palla che abbia le seguenti proprietà.
// - Nome = palla
// - Dimensione = 20
// - Peso = 10
// - Materiale = pvc

// Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla.

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}

$(document).ready(function () {

    var balls = []

    $(document).keypress(function () { 

        // chiedi all'utente un numero
        do{

            const name = prompt('Add name of ball');
            const dimention = prompt('Add dimension of ball');
            const weight = prompt('Add weight of ball');
            const material = prompt('Add material of ball');

            let ball = {
                name: name,
                dimension: dimention,
                weight: weight,
                material: material
            }           

            balls.push(ball)
            
            do{
                again = prompt('Can you add new ball:\n- t for add new team name\n- n for not add new team name');
            } while( !(again=='t'|| again =='T' || again=='n'|| again ==''))


        }while(again=='t'|| again =='T')

        $('#listNumber').empty();

        // stampa a schermo
        balls.forEach( (ball, index) => {
            item = /*html*/ ` 
                <div class="alert alert-info" value=${index} role="alert">
                    <p>
                        <p class='name'>Name: <span>${ball.name}</span>,</p>
                        <p class='dimension'>dimension: <span>${ball.dimension}</span>,</p> 
                        <p class='weight'>weight: <span>${ball.weight}</span>,</p> 
                        <p class='material'>material: <span>${ball.material}</span>,
                    </p> 
                </div>`

            // show in the windows
            $('#listNumber').append(item);

        });

        // edit card ball
        $('div.alert').click(function (e) { 
            
            const name = prompt('Edit name of ball');
            const dimension = prompt('Edit dimension of ball');
            const weight = prompt('Edit weight of ball');
            const material = prompt('Edit material of ball');

            var element = $(e.target).parents('.alert')[0];
            if(element == undefined){
                element = e.target
            } 

            let ball = {
                name: name,
                dimension: dimension,
                weight: weight,
                material: material
            }

            console.log(balls)

            balls[parseInt($(element).attr('value'))] = ball    
            
            $(element).find('.name span').text(name);
            $(element).find('.dimension span').text(dimension);
            $(element).find('.weight span').text(weight);
            $(element).find('.material span').text(material);
        });


    });    

    
});