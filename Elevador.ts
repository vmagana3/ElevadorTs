class Elevador
{
	//Declaramos atributos de la clase + tipo + tipo de dato.
	private pisosElevador:number;
	private pisoActual:number;
	private estadoPuerta:boolean;

	//Método constructor(recibimos los pisos totales al instanciar, el resto de valores se asignan dentro del método)
	constructor(pisosElevador:number)
	{
		this.pisosElevador = pisosElevador;
		this.pisoActual = 1;
		this.estadoPuerta = false;
	}

	//Los SET modifican los valores de atributos
	private void setEstadoPuerta(status:boolean)
	{	
		this.estadoPuerta = status;
	}
	private void setPisoActual(eleccion)
	{
		if(eleccion== "subir")
		{
			this.pisoActual++;
		}
		else
		{
			this.pisoActual--;
		}
	}
	//Los GET retornan el valor actual del atributo
	public getPisosElevador():number
	{
		return this.pisosElevador;
	}

	public getPisoActual():number
	{
		return this.pisoActual;
	}

	public getDoorStatus():boolean
	{
		return this.estadoPuerta;
	}

	//------------------------------------------------------------------------
	//Métodos de la puerta
	public void openDoor()
	{
		this.setEstadoPuerta(true);
	}

	public void closeDoor()
	{
		this.setEstadoPuerta(false);
	}

	//-------------------------------------------------------------------------
	//Métodos subir y bajar
	private void subir()
	{
		this.setPisoActual("subir")
	}
	private void bajar()
	{
		this.setPisoActual("bajar");
	}


	//-------------------------------------------------------------------------
	//Método ir al piso
	public Moverse(piso:number)
	{
		if(piso > this.getPisoActual())
		{
			this.closeDoor();
			do
			{
				this.subir();
			}
			while(piso < this.getPisoActual())
			this.openDoor();
		}
		else if(piso < this.getPisoActual())
		{
			this.closeDoor();
			do
			{
				this.bajar();
			}
			while(piso > this.getPisoActual())
		}
	}
}
