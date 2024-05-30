//Espero corra todo el html hasta ejecutar js
document.addEventListener('DOMContentLoaded', () => {
    //Busco el botón submit
        const formSubmit = document.getElementById('convert-btn');
    //Asocio evento y acción
        formSubmit.addEventListener('click', () => {
    //Reconozco donde se halla el dato que quiero, lo traigo y lo guardo 
          const inputElement = document.getElementById('number');
          const numero = inputElement.value;
    //Ubico dónde quiero mostrar la salida 
          const resultado = document.getElementById('output');
          if (numero === '') {
            resultado.textContent = "Please enter a valid number";
          } 
          else if (numero < 1) {
            resultado.textContent = "Please enter a number greater than or equal to 1"; 
          } 
          else if (numero > 3999) {
            resultado.textContent = "Please enter a number less than or equal to 3999";  
          } 
          else {
    //Convierto el numero ingresado
            const numRomano = transformarNum(numero);
    //Determino la salida 
              resultado.textContent = numRomano;
          };
            });
    });
    
    //Declaro la función que transforma de entero a romano
    function transformarNum(a) {
    //string vacio
        let romano = '';
    //Concateno las siglas correspondientes según el valor de a que se actualiza a medida que ya simbolizo cantidades. 
        while (a >= 1000) {
          romano += 'M';
          a -= 1000;
        };
        while (a >= 900) {
          romano += 'CM';
          a -= 900;
        };
        while (a >= 500){
          romano += 'D';
          a -= 500;
        };
        while (a >= 400) {
          romano += 'CD';
          a -= 400;
        };
        while (a >= 100) {
          romano += 'C';
          a -= 100;
        };
        while (a >= 90) {
          romano += 'XC';
          a -= 90;
        };
        while (a >= 50) {
          romano += 'L';
          a -= 50;
        };
        while (a >= 40) {
          romano += 'XL';
          a -= 40; 
        };
        while (a >= 10) {
          romano += 'X'; 
          a -= 10; 
        };
        while (a >= 9) {
          romano += 'IX';
          a -= 9;
        };
        while (a >= 5) {
          romano += 'V'; 
          a -= 5; 
        };
        while (a >= 4) {
          romano += 'IV'; 
          a -= 4;
        };
        while (a >= 1){
          romano += 'I';
          a -= 1; 
        }; 
        return romano; 
        };