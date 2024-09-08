let colores = ["Gris", "Blanco", "Rosa", "Amarillo", "Turquesa", "Tomate"];

console.log(colores[0]);
console.log(colores[1]);
console.log(colores[2]);
console.log(colores[3]);
console.log(colores[4]);
console.log(colores[5]);

// USANDO EL CICLO "for":

for (let i = 0; i < colores.length; i++)
{
    console.log(colores[i]);
}

// USANDO EL CICLO "for-each":

colores.forEach(function(miColor)
{
    console.log(miColor);
});