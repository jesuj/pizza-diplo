import { Cheese, Dough, Lunchmeat, Meat, Salsa, Size, Topping, Vegetable } from './Ingredientes'

export class Pizza {
  private nombre!: string
  private tamaño!: Size

  // Ingredientes
  private masa!: Dough
  private salsa!: Salsa
  private carnes!: Meat[]
  private quesos!: Cheese[]
  private embutidos!: Lunchmeat[]
  private vegetales!: Vegetable[]
  private adicionales!: Topping[]

  constructor (nombre: string, size: Size) {
    this.nombre = nombre
    this.tamaño = size
  }

  public toString (): string {
    return `Pizza {
      nombre=${this.nombre}, 
      size=${this.tamaño},
      masa=${this.masa},
      salsa=${this.salsa},
      carnes=(${this.carnes.join(',')})
      quesos=(${this.quesos.join(',')})
      embutidos=(${this.embutidos.join(',')})
      vegetales=(${this.vegetales.join(',')})
      adicionales=(${this.adicionales.join(',')})
    }`
  }

  public setNombre (nombre: string): Pizza {
    this.nombre = nombre
    return this
  }

  public setTamaño (size: Size): Pizza {
    this.tamaño = size
    return this
  }

  public setSalsa (salsa: Salsa): Pizza {
    this.salsa = salsa
    return this
  }

  public setMasa (masa: Dough): Pizza {
    this.masa = masa
    return this
  }

  public setCarnes (carnes: Meat[]): Pizza {
    this.carnes = carnes
    return this
  }

  public setQuesos (quesos: Cheese[]): Pizza {
    this.quesos = quesos
    return this
  }

  public setEmbutidos (embutidos: Lunchmeat[]): Pizza {
    this.embutidos = embutidos
    return this
  }

  public setVegetales (vegetales: Vegetable[]): Pizza {
    this.vegetales = vegetales
    return this
  }

  public setAdionales (adicioneles: Topping[]): Pizza {
    this.adicionales = adicioneles
    return this
  }
}
