/* 
cargando archivos con require("./")
*/
const validator = require("validator")
const chalk = require("chalk")
const mensaje_1 = require("./utils.js")
const mensaje_2 = require("./notes_challenge.js")
const add = require("./addFunction.js")
/*
Ejecutando la variable cargada de "utils.js"
*/
mensaje_1()
/*
Utilizando el código de "addFunction.js"
const suma = add(5,5)
console.log(suma)
*/
console.log(add(5,5))
mensaje_2()
/*
validator y chalk son módulos NPM y deben ser instalados dentro de la carpeta
en la Terminal con "npm i validator/chalk" y antes de este paso debe inicializarse
NPM >>> "npm init"
> npm init
> npm i validator/chalk
*/
console.log(validator.isEmail("montoya@ejemplo.com"))
console.log(validator.isURL("https://mead.io"))
console.log
(
    chalk.green.bold('\nSoy un testo verde '+ 
    chalk.blue.underline.bold('con subrayado azul') + ' y me hice verde de nuevo')
)

console.log(chalk.white.bgRed.bold('\nFondo rojo con letras blancas'))
/*
Se pueden guardar un texto editado con chalk en una variable 
*/
const mensaje_verde = chalk.magenta.bold
(
    "\nColoreado exitoso al magenta y "+
    "comprobando NODEMON."
)
console.log(mensaje_verde)
