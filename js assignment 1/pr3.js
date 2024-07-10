function findtax(salary){
    let tax=0;
    switch(true){
        case (salary>0 && salary<=500000):
        tax =0;
        break;
        case (salary>500000 &&  salary<=1000000):
            tax=salary*0.10;
            break;
        case(salary >= 1000000 && salary > 1500000):
        tax =salary*0.20;
        break;
        case(salary > 1500000):
        tax=salary*0.30;
        break;
        default:
            console.log("enter valid salary");
            break;
    }
    return tax;
    
}
console.log(findtax(2000000));