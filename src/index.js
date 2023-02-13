module.exports = function reverse (n) {
  if (n<0) n=n*(-1)
  let i=0;
  let result = '';
  let stringNum = String(n);
  while(i<stringNum.length){
    result = `${stringNum[i]}${result}`;
    i =i+1;
  }
return Number(result);
};