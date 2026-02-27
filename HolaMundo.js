//HolaMundo.js
//Autor: Angel Duvan Romero Verdin
//Primer codigo de javascript

const readline = requiere("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Cual es su nombre: ",function(nombre){
    console.log(`¡Hola, ${nombre}, bienvenido a mi-primer-repo en JavaScript!`);
    rl.close();
});
