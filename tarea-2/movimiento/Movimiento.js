export default class Movimiento {
    constructor(tableMovimiento, tableInfo) {
        this._tableMovimiento = tableMovimiento;
        this._tableInfo = tableInfo;

        this._numSaldo = 50540;
        this._numMovimientos = 0;
        this._sumDepositos = 0;
    }



    addCliente(cliente){
        let row = this._tableMovimiento.insertRow(-1);
        let cellCantidad = row.insertCell(0);
        let cellCuenta = row.insertCell(1);
        let cellBeneficiario = row.insertCell(2);
        let cellBanco = row.insertCell(3);
        let cellFecha = row.insertCell(4);


        cellCantidad.innerHTML = cliente.cantidad;
        cellCuenta.innerHTML = cliente.cuenta;
        cellBeneficiario.innerHTML = cliente.beneficiario;
        cellBanco.innerHTML = cliente.banco;
        cellFecha.innerHTML= cliente.sFecha;
        
        this._numMovimientos++
        this._newSaldo = this._numSaldo-cantidad.cliente;
        this._tableInfo.rows[0].cells[1].innerHTML = this._numMovimientos;
        this._tableInfo.rows[1].cells[1].innerHTML = this._newSaldo;

        
    }
}