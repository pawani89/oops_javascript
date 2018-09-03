function empWithExtraHours(){}
empWithExtraHours.prototype.calSalary = function (bs,eh,rate){
    console.log(bs + (eh*rate)) ; 
}

function empWOExtraHours(){}
empWOExtraHours.prototype.calSalary= function(bs,rate){
    console.log(bs*rate) ;
}

let wo = new empWOExtraHours();
wo.calSalary(100,2);
let w = new empWithExtraHours();
w.calSalary(100,20,2)