
import { Director } from '../builder/Director'
import { PizzaBuilder } from '../builder/PizzaBuilder'
import { Pizza } from '../models/Pizza'
import { Size } from '../models/Ingredientes'

export class PizzaService {
  // private logger!: ILog
  // private cripto!: Encrypt
  // private readonly lista!: Usuario[]

  // constructor (logger: ILog, cripto: Encrypt) {
  //   this.logger = logger
  //   this.cripto = cripto
  //   this.lista = []
  // }

  create (name: string, size: Size, type: string): void {
    console.log(name, size)
    const pizzaBuilder: PizzaBuilder = new PizzaBuilder()
    const cocinero: Director = new Director(pizzaBuilder)
    cocinero.prepararPizzaJamon()
    const pizza: Pizza = pizzaBuilder.getPizza()
    console.log(pizza.toString())
  }

  // login (userName: string, _password: string): boolean {
  //   for (const user of this.lista) {
  //     if (user.getUserName() === userName) {
  //       this.logger.register(`Usuario autenticado: ${user.toString()}`)
  //       return true
  //     }
  //   }
  //   this.logger.register('Fallo de autenticacion')
  //   return false
  // }

  // setLogger (logger: ILog): void {
  //   this.logger = logger
  // }

  // setCripto (cripto: Encrypt): void {
  //   this.cripto = cripto
  // }
}
