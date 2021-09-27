//Solution 1

// var obj1 = {name: "Person1", age:36};
// var obj2 = {age:36,name: "Person1"};

// console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

//Solution 2

var obj1 = {name: "Person1", age:36,sex:"Male"};
var obj2 = {age:36,name: "Person1",city: "London"};

//Find keys
keyObje1=Object.keys(obj1);
keyObje2=Object.keys(obj2);

//Find values
valObje1=Object.values(obj1);
valObje2=Object.values(obj2);

//find max length to iterate

if(keyObje1.length>keyObje2.length) {
  var biggestKey = keyObje1.length;
} else {
  var biggestKey = keyObje2.length;
}

//now compare keys and values

for(var i=0;i<biggestKey;i++)
  {
    if(keyObje1[i] ===keyObje2[i] && valObje1[i] === valObje2[i])
      {
        console.log(valObje2[i]);
      }
    else {
      console.log('obj1 value: ' + valObje1[i] + '\nobj2 Value: '+ valObje2[i] + '\n');
    }
  }