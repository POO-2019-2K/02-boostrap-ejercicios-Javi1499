import Reservacion from "./Reservacion.js";
import Huesped from "./Huesped.js";

class Main {
    constructor() {
        this._reservacion = new Reservacion(document.querySelector("#reservacion"), document.querySelector("#info"));

        document.querySelector("#btnAdd").addEventListener("click", () => {

            let name = document.querySelector("#name").value;
            let email = document.querySelector("#email").value;
            let telefono = document.querySelector("#telefono").value;
            let habitacion = document.querySelector("#tHabitacion").value;
            let sFLlegada = document.querySelector("#fLlegada").value;
            let sFSalida = document.querySelector("#fSalida").value;
            //Se hace el split para tener fecha como vector//
            sFLlegada = sFLlegada.split('-');
            let FLlega = new Date(sFLlegada[0], sFLlegada[1], sFLlegada[2]);

            sFSalida = sFSalida.split('-');
            let FSalida = new Date(sFSalida[0], sFSalida[1], sFSalida[2]);

            let huesped = new Huesped(name, email, telefono, habitacion, FLlega, FSalida);

            this._reservacion.addHuesped(huesped);
        })
    }


}

let m = new Main();

