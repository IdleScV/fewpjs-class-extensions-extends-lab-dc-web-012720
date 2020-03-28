// Your code here

class Polygon {
  constructor(array){
    this.sides = array 
  }
  
  get countSides(){
    return this.sides.length
  }
  
  get perimeter(){
    let ans = 0
    for(let i = 0; i < this.sides; i++){
      ans += this.sides[i]
    }
    
    return ans
  }
  
}

class Triangle extends Polygon {
  get isValid(){
    return this.countSides === 3
  }
}