class ramen {

	constructor (usuario, restaurante, nota) {
		this.usuario = usuario
		this.restaurante = restaurante
		this.nota = nota
		}

	calificacion () {
		console.log('La nota de ' + this.restaurante + ' es ' + this.nota)
		}

}

const ramen1 = new ramen ('Jose', 'Mirutaki', 8)
const ramen2 = new ramen ('Maria', 'Nueva Casa Japonesa', 9)
const ramen3 = new ramen ('Miguel', 'Nen Ramen', 10)

ramen1.calificacion();
ramen2.calificacion();
ramen3.calificacion();
