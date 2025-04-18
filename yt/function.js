//  function hello(){
//     console.log("hello ");
//  }

//  function hellome(greet,fullname){
//     console.log("my full name is "+fullname);
//     hello();
//  }

//  hellome(hello,"sunny");

function kro(number){
    return function(number){
        return number*number;
    }
}
let ans=kro();
console.log(ans(5));


var age =18;
console.log(age);
