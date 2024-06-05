//---Implementar la modularidad---//
export class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto || [];
  }

  //---Implementar un método que permita calcular el impuesto total a pagar por parte del cliente---//
  calcularImpuestoAnual() {
    return (this.impuesto.montoBrutoAnual - this.impuesto.deducciones) * 0.21;
  }

//---Implementar getter y setter para acceder y/o modificar los datos de las clases---//
  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  get impuesto() {
    return this._impuesto;
  }

  set impuesto(nuevoImpuesto) {
    this._impuesto = nuevoImpuesto;
  }
}
