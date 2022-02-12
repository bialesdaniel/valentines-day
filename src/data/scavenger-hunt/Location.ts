import Coordinates from './Coordinates';

export default class Location {
  public name: string
  public clue: string
  public hint: string
  public coordinates: Coordinates

  constructor(name:string, clue:string, hint:string, coordinates:Coordinates){
    this.name = name
    this.clue = clue
    this.hint = hint
    this.coordinates = coordinates
  }
}