//Create an array with 6 of your favorite foods
var favFood = ["salmon", "hamburguesa", "helado", "patata", "ensalada", "pasta"]
//only print out the foods with an even index
for (var i = 0; i < favFood.length; i++) {
    if (i % 2 === 0) { console.log(favFood[i]) }
}
// "salmon" "helado" "ensalada"
