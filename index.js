// Your code here

class Polygon {
  constructor(array){
    this.sides = array 
  }
  
  get countSides(){
    return this.sides.length
  }
  
  get perimeter(){
    this.perimeter = this.sides.reduce(function(a, b){

        return a + b;

    }, 0);
    return this.perimeter
  }
  
}

class Triangle extends Polygon {
  get isValid(){
    return this.countSides() === 3
  }
}