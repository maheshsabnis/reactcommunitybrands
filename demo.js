let obj1 = {x:10};
let obj2 = obj1;
 
console.log(`First Equal Obj1.x = ${obj1.x} and Obj2.x = ${obj2.x}`);

obj2.x  =100;

console.log(`After  obj2.x = 100 then Obj1.x = ${obj1.x} and Obj2.x = ${obj2.x}`);


// using  object.assign()


// copying obj1 in new blank object with its schema and value
// and obj3 is pointing to this blank object

let obj3 = Object.assign({}, obj1);
console.log(`Object.assign Obj1.x = ${obj1.x} and Obj3.x = ${obj3.x}`);

obj3.x = 400;
console.log(`After  obj3.x = 400 then Obj1.x = ${obj1.x} and Obj3.x = ${obj3.x}`);

let obj4 = [...obj1];
console.log(`Object Spread for obj1 into obj4 Obj1.x = ${obj1.x} and Obj4.x = ${obj4.x}`);


