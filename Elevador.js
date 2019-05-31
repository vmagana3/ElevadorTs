var Elevador = /** @class */ (function () {
    //Método constructor(recibimos los pisos totales al instanciar, el resto de valores se asignan dentro del método)
    function Elevador(pisosElevador) {
        this.pisosElevador = pisosElevador;
        this.pisoActual = 1;
        this.estadoPuerta = false;
    }
    Elevador.prototype.setEstadoPuerta = function (status) {
        this.estadoPuerta = status;
    };
    Elevador.prototype.setPisoActual = function (eleccion) {
        if (eleccion == "subir") {
            this.pisoActual++;
        }
        else {
            this.pisoActual--;
        }
    };
    //Los GET retornan el valor actual del atributo
    Elevador.prototype.getPisosElevador = function () {
        return this.pisosElevador;
    };
    Elevador.prototype.getPisoActual = function () {
        return this.pisoActual;
    };
    Elevador.prototype.getDoorStatus = function () {
        return this.estadoPuerta;
    };
    Elevador.prototype.openDoor = function () {
        this.setEstadoPuerta(true);
    };
    Elevador.prototype.closeDoor = function () {
        this.setEstadoPuerta(false);
    };
    Elevador.prototype.subir = function () {
        this.setPisoActual("subir");
    };
    Elevador.prototype.bajar = function () {
        this.setPisoActual("bajar");
    };
    //-------------------------------------------------------------------------
    //Método ir al piso
    Elevador.prototype.Moverse = function (piso) {
        if (piso > this.getPisoActual()) {
            this.closeDoor();
            do {
                this.subir();
            } while (piso < this.getPisoActual());
            this.openDoor();
        }
        else if (piso < this.getPisoActual()) {
            this.closeDoor();
            do {
                this.bajar();
            } while (piso > this.getPisoActual());
        }
    };
    return Elevador;
}());
