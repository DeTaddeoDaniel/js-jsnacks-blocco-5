// Jsnack 2
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: 
// - nome 
// - motrice
// - peso

// Stampare a schermo la bici con peso minore

$(document).ready(function () {

    var bikes = []
    let again = ''

    $(document).keypress(function () { 

        // chiedi all'utente un numero
        do{
            const name = prompt('Add the name of bike');
            const type = prompt('Add the type of bike');
            const weight = prompt('Add the weight of bike');
            const size = prompt('Add the size of bike');

            let bike = {
                name: name,
                type: type,
                weight: weight,
                size: size
            }

            bikes.push(bike)
            console.log(bike)

            
            do{
                again = prompt('Can you add new bike:\n- t for add new bike\n- n for not add new bike');
            } while( !(again=='t'|| again =='T' || again=='n'|| again ==''))


        }while(again=='t'|| again =='T')

        
        var bikeWeight = []

        while(bikes.length && bikeWeight.length <10) {
            
            // index of lighter bike
            let lessBikeWeight = 0;
            
            // check if lighter bike
            for (let t = 0; t < bikes.length; t++) {

                // if check more lighter bike change index
                if(parseInt(bikes[lessBikeWeight].weight) > parseInt(bikes[t].weight)){
                    lessBikeWeight = t
                }
            }

            // save e cancel bike less
            bikeWeight.push(bikes[lessBikeWeight])
            bikes.splice(lessBikeWeight, 1)
            
        }

        console.log(bikeWeight)
        
        let item;
        let index = 0

        bikeWeight.forEach( (bike, index) => {
            item = /*html*/ ` 
                <div class="alert alert-info" role="alert">
                    <p>
                        <span class="badge badge-primary text-dark">${index+1}</span>
                        <p>Name: ${bike.name},</p>
                        <p> Type: ${bike.type},</p> 
                        <p>weight: ${bike.weight},</p> 
                        <p>size${bike.size}</p>
                </div>`
            // show in the windows
            $('#listNumber').append(item);
            index++
        });


    });    
});