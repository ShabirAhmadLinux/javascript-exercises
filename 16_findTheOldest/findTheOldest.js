const findTheOldest = function(arr) {
  let person=arr.sort((a,b)=>{
    const NOW_DATE= new Date();
    const NOW_YEAR=NOW_DATE.getFullYear();
    if(!("yearOfDeath" in a)){
        a.yearOfDeath=NOW_YEAR;
    }
    if(!("yearOfDeath" in b)){
        b.yearOfDeath=NOW_YEAR;
    }
    return (b.yearOfDeath-b.yearOfBirth)-(a.yearOfDeath-a.yearOfBirth);
  });
  return person[0];
};

// Do not edit below this line
module.exports = findTheOldest;
