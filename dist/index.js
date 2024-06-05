"use strict";

var _Cliente = require("./Dominio/Cliente.js");
var _Impuestos = require("./Dominio/Impuestos.js");
//---Implementar la modularidad importando js---//

//-- Crear el nuevo impuesto--//
var impuesto1 = new _Impuestos.Impuesto(68000, 33600);

//-- Crear el nuevo cliente--//
var cliente1 = new _Cliente.Cliente("Jhon Spartan Ltda.", impuesto1);

//--Calcular el impuesto anual a pagar--//
var impuestoAnual = cliente1.calcularImpuestoAnual();

//--Visualizar en consola el impuesto anual a pagar--//
console.log("El impuesto anual que debe pagar ".concat(cliente1.nombre, " es: ").concat(impuestoAnual));