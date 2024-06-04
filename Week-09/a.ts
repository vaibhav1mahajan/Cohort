// const x : number = 5;
// console.log(x);

// function greet(firstName:string){
//     console.log("Hello" + firstName);
// }

// function sum(a:number,b:number) : number{
//     return a+b;
// }

// const value = sum(1,5);
// console.log(value);

// function isLegal(age:number) : boolean{
//     return age>=18 ? true : false;
// }


// function sum(a:number, b:number) : number{
//     return a+b;
// }

// function runAfter1s(fn: (a:number,b:number)=>number,a:number,b:number):void{
//         setTimeout(() => {
//             console.log(fn(a,b));
//         }, 1000);
// }

// runAfter1s(sum,5,8);




// function isLegal(user:{
//     firstName:string,
//     lastName:string,
//     age:number
// }) : boolean{
//     return user.age>18?true:false;
// }



// interface User {
//     firstName:string,
//     lastName:string,
//      age:number,
//      email?: string
// }

// function isLegal(user: User) : boolean{
//     return user.age>18?true:false;
// }

// isLegal({
//     firstName:"Vaibhav",
//     lastName:"Mahajan",
//     age:19
// })




// interface Person{
//     name:string,
//     age:number,
//     greet(phrase:string):void
// }

// class Employee implements Person{
//     name: string;
//     age: number;

//     constructor(a:string,b:number){
//         this.name = a;
//         this.age = b;
//     }
//     greet(phrase: string): void {
//         console.log(phrase + this.name);
//     }
// }








// type stringOrNumber = string | number;

// function greet(id:stringOrNumber){
//     console.log('Hi' + id);
// }










// type Employee = {
//     name:string,
//     age:number
// }

// type Manager = {
//     name:string,
//     department:string
// }

// type TeamLead = Employee & Manager;

// const x: TeamLead = {
//     name:"Vaibhav Mahajan",
//     age:19,
//     department:'Backend'
// }









// function maxValue(arr : number[]) : number{
//         let max = 0;
//         for(let i =0;i<arr.length;i++){
//             if(arr[i]>max){
//                 max = arr[i];
//             }
//         }
//         return max;
// }





// Enums

// type keyInput = 'up' | 'down' | 'left' | 'right';

// function doSomething(keyPressed : keyInput){
    
// }




// enum Direcion {
//     Up,
//     Right,
//     Left,
//     Down
// }

// function doSomething(keyPressed: Direcion){
//     if(keyPressed==Direcion.Up){

//     }
// }



// enum Direcion {
//     Up = 'up',
//     Right = 'right',
//     Left = 'left',
//     Down = 'down'
// }

// // give type to everyone or no-one unless you define a number   
// function doSomething(keyPressed: Direcion){
//     if(keyPressed==Direcion.Up){
        
//     }
// }

// console.log(Direcion.Down)





// Generics


// type Input = string | number;

// function firstEle(arr: Input[]){
//     return arr[0];
// }
//  // problem is to we can't call function like toUpperCase 
// const val = [1,2,3,'lion'];





function getFirstEle<T>(arr: T[]):T{
    return arr[0];
}

console.log(getFirstEle<string>(['sdafsd','asdfasdfsadf']));
console.log(getFirstEle<number>([1,22,2,5,5,5]));