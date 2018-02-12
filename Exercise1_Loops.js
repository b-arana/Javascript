var result = "";
var word;// definir la variable 
var numLetras = word.length;

for( i = 0 ; i < numLetras ; i++ ){
    if ( numLetras < 9 ){
        result += "*";
    } else {
        result += "-";
    }
}

