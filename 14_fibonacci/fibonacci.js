const fibonacci = function(a) {
  let first=0;
  let second=1;
  let third;
  for(let i=0;i<a;i++){
    third=first+second;
    first=second;
    second=third;
  }
  return a<0?"OOPS":first;
};

// Do not edit below this line
module.exports = fibonacci;
