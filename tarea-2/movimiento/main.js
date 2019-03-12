import Movimiento from "./Movimiento.js";
import Cliente from "./Cliente.js";

class Main {
    constructor() {
        this._movimiento = new Movimiento(document.querySelector("#movimiento"), document.querySelector("#info"));

        document.querySelector("#btnAdd").addEventListener("click", () => {

            let cantidad = document.querySelector("#cantidad").value;
            let cuenta = document.querySelector("#cuenta").value;
            let beneficiario = document.querySelector("#beneficiario").value;
            let banco = document.querySelector("#banco").value;
            let sFecha = new Date();
            //Se hace el split para tener fecha como vector//
            let cliente = new Cliente(cantidad, cuenta, beneficiario, banco, sFecha);

            this._movimiento.addCliente(cliente);
        })
    }


}

let m = new Main();

