//Modulo

module.exports = {
    //esto es un modulo que va a exportar funciones
    //  forma de array de funciones
    sumar: function(a, b) {

        return a + b;

    },

    restar: function(a, b) {

        return a - b;

    },

    multiplicar: function(a, b) {

        return a * b;

    },

    dividir: function(a, b) {

        return a / b;

    }
}


module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir
}