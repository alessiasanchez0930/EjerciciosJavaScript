
alert('Bienvenido, Gracias por participar');
console.log('Bienvenido, Gracias por participar');

function encontrarMayor() {
  
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
  
    if(numero1> numero2 ){
        var mayor = numero1;
        
    }
    else if (numero2 > numero1){
      var mayor = numero2;
    }
    else{
      'ambos numeros son iguales';
    }
    
    document.getElementById("resultado").innerHTML = "El número mayor es: " + mayor;
  }
  //-----------------------------------------------------------------------------------------------------------------
  
  function verificarDivisible() {
    

    var numero = parseInt(document.getElementById("numero").value);
    var div = numero % 2 === 0;
  
    if (div) {
      document.getElementById("result").innerHTML = numero + " es divisible entre 2.";
    } 
    else {
      document.getElementById("result").innerHTML = numero + " no es divisible entre 2.";
    }
   
  }
  