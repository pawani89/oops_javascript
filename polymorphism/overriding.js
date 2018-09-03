function shape(){}
shape.prototype.draw= function(){
    console.log("akansha inside shape");
}
function circle(){}
circle.prototype = Object.create(shape.prototype);

circle.prototype.draw= function(){
    console.log("akansha inside circle");
}

function triangle(){}
triangle.prototype = Object.create(shape.prototype);
triangle.prototype.draw= function(){
    console.log("akansha inside triangle");
}
function square(){}
square.prototype = Object.create(shape.prototype);

// let chk1 = new triangle();
// chk1.draw();
// let chk2 = new circle()
// chk2.draw();


let objArray = [new shape, new circle, new triangle, new square];
objArray.map((obj)=>
obj.draw());