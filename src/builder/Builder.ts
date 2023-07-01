import { Cheese, Dough, Lunchmeat, Meat, Salsa, Size, Topping, Vegetable } from '../models/Ingredientes'

export interface Builder {
  nuevaPizza: (nombre: string, tamaño: Size) => void
  agregarBase: (masa: Dough) => void
  agregarSalsa: (salsa: Salsa) => void
  agregarComplementos: (auesos: Cheese[], carnes: Meat[], embutidos: Lunchmeat[]) => void
  agregarVegetales: (vegetales: Vegetable[]) => void
  agregarAdicionales: (adicionales: Topping[]) => void
  // nuevaPizza: (nombre: string, tamaño: Size) => this
  // agregarBase: (masa: Dough) => this
  // agregarSalsa: (salsa: Salsa) => this
  // agregarComplementos: (auesos: Cheese[], carnes: Meat[], embutidos: Lunchmeat[]) => this
  // agregarVegetales: (vegetales: Vegetable[]) => this
  // agregarAdicionales: (adicionales: Topping[]) => this
}
