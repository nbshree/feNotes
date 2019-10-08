
  // 遍历对象
function Person(){
    this.name = 'Lanny';
    this.age = '24';
    this.sleep = ()=>{
      console.log('I am sleeping~~~~');
    }
  }
  
  Person.prototype.sayHello = (name)=>{
    console.log('hello ' + name);
  }
  
  let person = new Person();
  person.sayHello('Lynn');
  
  for(let key in person){
    if(person.hasOwnProperty(key)){      //不遍历原型方法
      console.log(key);
    }
  }
//遍历数组
let array = [1,2,3,'lynn','Lanny']
console.log('for of: ')
for (let value of array){
  console.log(value);
}
console.log('\n'+'for in: ')
for (let key in array){
  console.log(key);
}
