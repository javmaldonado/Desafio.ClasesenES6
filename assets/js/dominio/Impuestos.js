//---Implementar la modularidad---//
export class Impuesto {
  constructor(montoBrutoAnual, deducciones) {
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }
//---Implementar getter y setter para acceder y/o modificar los datos de las clases---//
  get montoBrutoAnual() {
    return this._montoBrutoAnual;
  }

  set montoBrutoAnual(montoBrutoAnual) {
    this._montoBrutoAnual = montoBrutoAnual;
  }

  get deducciones() {
    return this._deducciones;
  }

  set deducciones(deducciones) {
    this._deducciones = deducciones;
  }
}
