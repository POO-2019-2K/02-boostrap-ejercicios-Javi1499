export default class Huesped {
    constructor(name, email, telefono, tHabitacion, fLlegada, fSalida) {
        this._name = name.toUpperCase();
        this._email = email;
        this._telefono = telefono;
        this._tHabitacion = tHabitacion;
        this._fLlegada = fLlegada;
        this._fSalida = fSalida;
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }
    get telefono() {
        return this._telefono;
    }
    get tHabitacion() {
        return this._tHabitacion;
    }

    getFLlegadaAsString() {
        let d = this._fLlegada.getDate() + "/" + this._fLlegada.getMonth() + "/" + this._fLlegada.getFullYear();
        return d;
    }
    get fLlegada() {
        return this._fLlegada;
    }
    
    getFSalidaAsString() {
        let e = this._fSalida.getDate() + "/" + this._fSalida.getMonth() + "/" + this._fSalida.getFullYear();
        return e;
    }
    get fSalida() {
        return this._fSalida;
    }

    ////////////////////returns employee agee(abs es adsoluto)//////////////////////////////
    getDifference() {
        let oneDay = (24 * 60 * 60 * 1000);
        let differenceMs = Math.abs(fechaLegadaAsString() - fechaSalidaAsString());
        return Math.round(differenceMs / oneDay);
    }
}