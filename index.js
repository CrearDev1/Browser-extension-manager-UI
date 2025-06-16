// let claveCorrecta = 'nohay';

// function validar(clave){
//     let resultado = clave === claveCorrecta;
//     console.log(resultado);
    
// }

// validar('nohay');

// let dobles = numeros.map(n => n*2);
// console.log(dobles);

// let dobles= [];
// numeros.forEach(n=> dobles=n*2);
// console.log(dobles);


// let menor = numeros[0];
// let mayor = numeros[0];

// for(let i = 0; i<numeros.length;i++){
//     if(numeros[i] < menor){
//         menor = numeros[i];
//     }else if(numeros[i]>mayor){
//         mayor = numeros[i]; 
// }
// }
// console.log(menor,mayor);

// numeros.push(55);
// numeros.pop();
// console.log(numeros);

// let arr1 = ['Hola!'];
// let arr2 = ['Adios!'];

// function unirArrays(arr1,arr2){
    //     return arr1.concat(arr2);
    
    // }
    // let nuevoArr = unirArrays(arr1,arr2);
    // console.log(nuevoArr);
// let numeros = [22,2,30,14];
    
// function eliminarPrimerElemento(arr){
//     let eliminado = arr.shift();
//     return eliminado;
// }
// console.log(numeros);
// let eliminado = eliminarPrimerElemento(numeros);
// console.log(eliminado);

// let persona = {
//     nombre: 'Saanti',
//     apellido: 'T',
//     edad: 27,
//     ocupacion: 'Dev',
//     mostrar: function(){
//         let texto = `
//         Nombre: ${this.nombre}
//         Apellido: ${this.apellido}
//         Edad: ${this.edad}
//         Ocupacion: ${this.ocupacion}
//         `;
//         return texto;
//     },
//     ubicacion : {
//         codigoPostal : 22,

//     }
// }
// persona.ocupacion = 'Front End Developer';
// persona.habilidad = 'Habil con las personas :)'
// // console.log(persona.mostrar());
// // console.log(persona);

// persona.ubicacion = [codigoPostal,ciudad,calle,numero];


let gastosMes = [
    [0,0,1,0,0],
    [0,0,0,1,0],
    [0,0,1,0,0],
    [0,0,0,0,1],
    
];

function gastosSemana(arr,numSemana){
    return arr[numSemana].reduce((acc,num) => acc+=num);
}

function gastoDelMes(arr,gastosSemana){
    let total = 0;
    for(let i=0;i<arr.length;i++){
        total+=gastosSemana(arr,i);
    }
    return total;
}

let gastoTotalMes =  gastoDelMes(gastosMes,gastosSemana);
console.log(gastoTotalMes);
