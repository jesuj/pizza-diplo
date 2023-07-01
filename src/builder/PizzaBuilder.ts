import { Cheese, Meat, Vegetable, Topping, Size, Dough, Salsa, Lunchmeat } from '../models/Ingredientes'
import { Builder } from './Builder'
import { Pizza } from '../models/Pizza'

export class PizzaBuilder implements Builder {
  private pizza!: Pizza

  nuevaPizza (nombre: string, tamaño: Size): void {
    this.pizza = new Pizza(nombre, tamaño)
  }

  agregarBase (masa: Dough): void {
    this.pizza.setMasa(masa)
  }

  agregarSalsa (salsa: Salsa): void {
    this.pizza.setSalsa(salsa)
  }

  agregarComplementos (quesos: Cheese[], carnes: Meat[], embutidos: Lunchmeat[]): void {
    this.pizza.setQuesos(quesos)
      .setCarnes(carnes)
      .setEmbutidos(embutidos)
  }

  agregarVegetales (vegetales: Vegetable[]): void {
    this.pizza.setVegetales(vegetales)
  }

  agregarAdicionales (adicionales: Topping[]): void {
    this.pizza.setAdionales(adicionales)
  }

  getPizza (): Pizza {
    return this.pizza
  }
}
