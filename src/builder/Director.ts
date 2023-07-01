import { PizzaBuilder } from './PizzaBuilder'

export class Director {
  private readonly builder!: PizzaBuilder

  constructor (builder: PizzaBuilder) {
    this.builder = builder
  }

  public prepararPizzaJamon (): void {
    this.builder.nuevaPizza('jamon', 'small')
    this.builder.agregarBase('normal')
    this.builder.agregarSalsa('salsa-tomate')
    this.builder.agregarComplementos(['mozzarella'], ['jamon'], [])
    this.builder.agregarVegetales([])
    this.builder.agregarAdicionales([])
  }

  public prepararPizzaPepperoni (): void {
    this.builder.nuevaPizza('pepperoni', 'small')
    this.builder.agregarBase('normal')
    this.builder.agregarSalsa('salsa-tomate')
    this.builder.agregarComplementos(['mozzarella'], [], ['pepperoni'])
    this.builder.agregarVegetales([])
    this.builder.agregarAdicionales([])
  }

  public prepararPizzaSuprema (): void {
    this.builder.nuevaPizza('suprema', 'small')
    this.builder.agregarBase('normal')
    this.builder.agregarSalsa('salsa-tomate')
    this.builder.agregarComplementos(['mozzarella'], ['jamon', 'res', 'cerdo'], ['pepperoni'])
    this.builder.agregarVegetales(['pimeton', 'cebolla', 'champiñon'])
    this.builder.agregarAdicionales(['aceituna-negra'])
  }
}
