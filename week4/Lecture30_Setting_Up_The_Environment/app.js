const addNumbers = (...args)=>{
    let sum=0;
    args.forEach((args)=>sum+=args);
    return sum;
}

console.log(addNumbers(1,2,3,4,5));