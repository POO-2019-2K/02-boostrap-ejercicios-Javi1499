export default class Huesped {
    constructor(cantidad, cuenta, beneficiario, banco) {
        this._cantidad = cantidad;
        this._cuenta = cuenta;
        this._beneficiario = beneficiario;
        this._banco = banco;
    }


    get cantidad() {
        return this._cantidad;
    }
    get cuenta() {
        return this._cuenta;
    }
    
    
    get beneficiario() {
        return this._beneficiario;
    }

    getFechaAsString() {
        let d = this._fecha.getDate() + "/" + this._fecha.getMonth() + "/" + this._fecha.getFullYear();
        return d;
    }

    get banco() {
        return this._banco;
    }

    ////////////////////returns employee agee(abs es adsoluto)//////////////////////////////
    getDifference() {
        let oneDay = (24 * 60 * 60 * 1000);
        let differenceMs = Math.abs(fechaLegadaAsString() - fechaSalidaAsString());
        return Math.round(differenceMs / oneDay);
    }
}
