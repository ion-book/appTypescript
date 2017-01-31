export class Person{


  constructor(
    public name: string,
    public age: number,
    private city: string = 'Bogota'){
  }

  getName(){
    return this.name;
  }

  getCity(){
    return this.city;
  }
}
export function sum(a: number,b: number = 4){
  return a + b;
}