function factorialOfNum(num) {
  let fact =1;
  
  for (let index = 1; index<=num; index++) {
        fact=fact*index;
 }
 
  console.log(`factorial of ${num}: ${fact}`);
    return fact;  
}
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(NaN);
factorialOfNum(0);
