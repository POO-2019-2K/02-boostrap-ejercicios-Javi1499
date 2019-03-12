export default class Reservacion {
    constructor(tableReservacion, tableInfo) {
        this._tableReservacion = tableReservacion;
        this._tableInfo = tableInfo;

        this._numReservaciones = 0;
        this._averageAge = 0;
        this._sumAge = 0;
    }



    addHuesped(huesped){
        let row = this._tableReservacion.insertRow(-1);
        let cellName = row.insertCell(0);
        let cellEmail = row.insertCell(1);
        let cellTelefono = row.insertCell(2);
        let cellHabitacion = row.insertCell(3);
        let cellFLlegada = row.insertCell(4);
        let cellFSalida = row.insertCell(5);

        cellName.innerHTML = huesped.name;
        cellEmail.innerHTML = huesped.email;
        cellTelefono.innerHTML = huesped.telefono;
        cellHabitacion.innerHTML = huesped.tHabitacion;
        cellFLlegada.innerHTML= huesped.getFLlegadaAsString();
        cellFSalida.innerHTML= huesped.getFSalidaAsString();
        
        this._numReservaciones++
        this._tableInfo.rows[1].cells[1].innerHTML = this._numReservaciones;

        
    }
}