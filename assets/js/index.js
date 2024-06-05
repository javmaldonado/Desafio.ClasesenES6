//---Implementar la modularidad importando js---//
import { Cliente } from "./Dominio/Cliente.js";
import { Impuesto } from "./Dominio/Impuestos.js";

//-- Crear el nuevo impuesto--//
const impuesto1 = new Impuesto(68000, 33600);

//-- Crear el nuevo cliente--//
const cliente1 = new Cliente("Jhon Spartan Ltda.", impuesto1);

//--Calcular el impuesto anual a pagar--//
const impuestoAnual = cliente1.calcularImpuestoAnual();

//--Visualizar en consola el impuesto anual a pagar--//
console.log(
  `El impuesto anual que debe pagar ${cliente1.nombre} es: ${impuestoAnual}`
);
