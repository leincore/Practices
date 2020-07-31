/*
Cargando el módulo "fs" con require() para lectura
y escritura de archivos (creación/sobreescribir) e inicializando
un objeto en una variable

const (variable) = require("módulo")
*/
const fs = require("fs")
/*
Creando o sobreescribiendo archivo.
(variable).writeFileSync("file_name","message")
*/
fs.writeFileSync("notes.txt", "My name is Eduardo")