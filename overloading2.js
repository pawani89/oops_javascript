function employee (){

}
employee.prototype.employeeType = function(){
switch(arguments[0])
{
    case 'w': console.log(arguments[1]*arguments[2]) ;
    break;
case 'wo': console.log(arguments[1]+(arguments[2]*arguments[3])) ;
    break;
    default: 
    return 'select somethig'

}

}

let e1 = new employee();
e1.employeeType("w",1000,20);
e1.employeeType("wo",10,10,10)