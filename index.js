// Your code here

class Polygon {
  constructor(array){
    this.sides = array 
  }
  
  get countSides(){
    return this.sides.length
  }
  
  get perimeter(){
    this.sides.reduce(function(a, b){

        return a + b;

    }, 0);
  }
  
}

class Triangle extends Polygon {
  get isValid(){
    return this.countSides() === 3
  }
}