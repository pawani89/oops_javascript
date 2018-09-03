//      Creating Objects
//object literal way
const circle = {
radius:1,
location:{
    x:1,
    y:1
},
draw : function (){
    console.log("draw ")
}
}
//circle.draw()

//factories:returning an object in a function means it is a factory function
function createCircle(radius){
    return {
        radius,
        darw: function(){
            console.log('draw factories')
        }
    }
}
const c1 = createCircle(1);
//c1.darw()

//constructor: this keyword with new means constructor function
function Circle(radius){
//console.log(this)
    this.radius= radius;
    this.darw=function(){
        console.log("constructor draw")
    }
}
const c2 =  Circle(10);
//     this will refer to the global or window object.
const c3 = new Circle(10);
//     this will the context of Circle
//     c2.darw()-> throws error since window object dont have draw fynction
//c3.darw()

//contructor property of object
let x = {}
console.log(x.constructor);
let y = ""
console.log(y.constructor);
let z = true
console.log(z.constructor);
let a = 10
console.log(a.constructor);

let circleFunction = createCircle(10);
console.log(circleFunction.constructor)

let c4 = new Circle(10);
console.log(c4.constructor)