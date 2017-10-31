  var array =[];
  var mul;
  var sum =0;
  var sum1 =0;
  var number =0 ;
  var sum2 =0;
  var sumT=0;
  /*se inicia declarando las variables que se van a utilizar
  1.- array: esta variable va a almacenar nuestra cadena de numero alrevez
  2.- mul: en esta variable se va a almacenar la multiplicacion de numeros multiplocados
  3.- sum: va a almacenar la suma de dos digitos ejemplo: 12 = 1+2= 3
  4.- sum1: esta variable va a almacenar la suma de numeros en posiciones impares
  5.- sum2: va a almacenar la suma de numeros en pocisiones pares pero menores de dos dijitd o 10
  5.- sumT: va almacenar la suma de todas las anteriores
  */
  var strN = prompt ("introduce tu cadena de numeros");/*se esta declarando la
  variable strN que va a almacenar nuestra cadena de numeros enseguida un promt que nos va a permitir introducir nuestra cadena*/
  if(strN === " "){ //se hace la comparacion que si introducimos una cadena vacia nos manda que ingresemos algo
    alert("ingresa algo");
  }
function isValidCard(lgthN){// esta es una funcion llamada isValidCard que recibe como parametro lgthN nuestra cadena de nnumeros
  var strDivided = lgthN.split("");// vamos a dividir nuestra cadena de numerosintroducidos
  var lengthStr = strDivided.length;// vamos a contar cuantos caracteres se introdujeron despues de cortarlos, la variable se llama LengthStr porque aun tenemos a nuestros numero como si fueran strings
array = strDivided.reverse();// vamos a almacenar en nuestro array vacio nuestros caracteres y con la funcion reverse vamos a invertirlos
for(var j=0 ; j< array.length; j++){// vamos a hacer el corrimiento por indice de nuestro arreglo poniendo como limite el tamaño de nuestro arreglo
if(j % 2 ===0){//preguntamos que si nuestro indice es par y lo hago asi por que mi indice lo comienzo en cero
    sum1 = sum1 + parseInt(array[j]);// hago la suma de todos esos elementos
}else{// si no es el caso
    mul = array[j] * 2;// multiplico los valores en esos indices
     if(mul < 10){//si el resultado de la multiplicacion es menor
      sum2 = sum2 + mul;// sumalos
    }else if(mul >= 10){//si son mayores o igual a 10
     number = mul.toString().split('').map(x => parseInt(x) ).reduce( (x, y) => x + y);// en numero se va a almacenar la suma de los dos digitos ejemplo 12 =1+2 =3
     sum = sum + numero ;// una vez que se tenga nuestro resultado los vamos sumando
     }
   }
}
sumT =sumT+ sum+sum1+sum2;// sumo las sumas anteriores :)
if(sumT %10 === 0){// comparo si mi suma total modulo de 10 es igual a 0
  var result = console.log("tarjeta valida");// entonces m¿nos mandara qu es valida
}else{// si no
    result= console.log("tarjeta no valida");//nuestra tarjeta es no valida
  }
/*console.log(sum2);
console.log(sum);
console.log(sum1);
console.log(sumT);*/
return result;// retornamos nuestro resultado
}
var output = isValidCard(strN);// mandamos nuestra cadena
console.log(output);
