import MenuItem from './MenuItem'

export default class Menu {
  public appetizers: MenuItem[]
  public entrees: MenuItem[]

  constructor(appetizers: MenuItem[], entrees: MenuItem[]) {
    this.appetizers = appetizers
    this.entrees = entrees
  }
}
