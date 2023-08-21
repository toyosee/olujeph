// // comment single line comment
// /*  This is a css comment - 
// multiple line comments */

// // VARIABLES
// let first_name, middle_name, last_name, age ; // Variable initialization pr declaration
// first_name = 'Nathan'; // Assignment
// middle_name = "Ethan"; // Assignment
// last_name = 'Abolaji';
// age = 5;

// console.log(last_name + ' ' + age); // Printing out to console

// // program to add three numbers
// let num1, num2, num3
// num1 = 4
// num2 = 6
// num3 = 4
// let result = num1*num2
// console.log(result)

// // Area of right angle triangle
// let base = 4
// let height = 6
// const Mercy = 0.5
// let area_of_tri = base * height * Mercy// formula line
// console.log(area_of_tri)

// Data types

// integer a.k.a whole numbers
// let num1, num2, num3;
// num1 = 4
// num2 = Number('45')
// num3 = 76
// let fruits = ['banana', 'orange', 'apple', 45, [43,42,41]]
// let awsome = {'name':'Emmanuel'}

// //console.log(typeof fruits)
// console.log('5' * 5)

// // bringing elements from html
// const Input1 = document.getElementById('input1')
// const Input2 = document.getElementById('input2')
// const Input3 = document.getElementById('input3')
// const Input4 = document.getElementById('input4')
// const Change1 = document.getElementById('change1')
// const Change2 = document.getElementById('change2')
// const Change3 = document.getElementById('change3')
// const Btn = document.getElementById('btn')
// let combo = []

// // // function to change text
// function doSo(){
//     // pushing inputs into an empty array
//     combo.push(Input1.value, Input2.value, Input3.value, Input4.value)

//     // Displaying input in the display paragraphs
//     Change1.innerHTML = combo;
//     Change2.innerHTML = combo.join(' | ')
//     Change3.innerHTML = combo.toString()

//     // Resetting input fields after button click
//     Input1.value = ''
//     Input2.value = ''
//     Input3.value = ''
//     Input4.value = ''

// }

//console.log(typeof []) 
// const names = [
//     'Jephtah',
//     'Olu', 
//     'Josiah', 
//     'Jesse', 
//     'Musa', 
//     'Dabira',
//     'Olu'
// ];

    //console.log(`The length of this array is ${names[names.length-1]}`)
// Jephthah is in index 0
// let nameLen = names.length;

// for(let i = 0; i < nameLen; i++){
//     if(names[i] === 'Olu'){
//         names[i] = 'Me'
//     }
//     //console.log(`${names[i]} is in index ${i}`)
    
// }
//console.log(names.join(' -> '))

// shift(), unshift('), pop(), push('')
// Write a program that outputs the numbers in an array between 1 and 10
// in this pattern. EVEN and ODD
// 1 is ODD
// 2 is EVEN
// 3 is ODD..........

// const collection = [1,2,3,4,5.4,6,7,8,9,10]
// let colLen = collection.length
// for(let item = 0; item < colLen; item++){
//     if(collection[item] <= 5){
//         console.log(`${collection[item]}`)
//      }//else{
//     //     console.log(`${collection[item]} is ODD`)
//     // }
// }

// let shoes = ['Nike', 'Adidas', 'Channelle']
// let jackets = ['Puma', 'Adidas', 'Balanciaga']
// let caps = ['Bottega', 'Nike', 'puma']
// let slides = ['Nike', 'Bottega']

// let myCollesctions = shoes.concat(jackets,caps,slides)
// console.log(myCollesctions)

// let name = 'Aisha'
// let age = 42
// let comb = []
// comb.push(name,age)
// console.log(comb)
// let his_name = 'Jeph'
// let age = 4
// let attendance = false
// let collection = []
// collection.push(his_name,age,attendance)
// collection.unshift('Abuja')
// console.log(collection)
// console.log(collection.indexOf(false))

// Design 4 input fields, 1 submit button and give the outputs below
// first output should be array []
// second output should be seperated by a |
// Third output should be a comma seperated


// get from html for form and table

// const UserName = document.getElementById('')

// Objects {}

// const collection = {name: "Olu",
//                     likes: ["football", "music", "chess"],
//                     family_name: "Salawu",
//                     greeting: function greet(){console.log("Good morning")}
// }

//console.log(collection.likes[1])

// const Details = document.getElementById('customer')
// const Btn = document.getElementById('btn3')
// const style = {styling: `font-size:20px; color:green;`}

// const customer = {  name: "Olu",
//                     last_name: "Salawu",
//                     date: new Date(),
//                     account_numbers: {savings: 112233445566, current:9988776655},
//                     account_type: ["Savings", "Current"],
//                     account_balance: "$300.50",
//                     details: function(){
//                         return `
//                         ${this.name} ${this.last_name} 
//                         <br>${this.account_type[0]} : ${this.account_numbers.savings} 
//                         <br>${this.account_balance} 
//                         <br>Generated on ${this.date}
//                         `},
//                     account_details: function(){
//                         return `
//                         ${this.name} ${this.last_name} <br>
//                         ${this.account_type[0]} : ${this.account_numbers.savings}<br>
//                         ${this.account_type[1]} : ${this.account_numbers.current}<br>

//                         `
//                     }

// }

// // function to view customer account details
// function view_customer(){
//     Details.innerHTML = customer.details()
//     Details.style = style.styling
// }

// // function to view customer account types
// function all_accounts(){
//     Details.innerHTML = customer.account_details()
//     Details.style = style.styling
// }


// // Function to reset the view
// function reset() {
//     let message = "Customer details will appear here"
//     return Details.innerHTML = `${message}`
// }

// const jephtah = {first_name: "Jeph",
//                     likes: ["PS4", 'PS5', 'Laptop'],
//                     hobbies: {playing: ["football", 'Rugby','video games'], serious: ['Coding', 'Reading', 'Chess']},
//                     all_best: function(){
//                         return `
//                         ${this.first_name}, 
//                         ${this.likes[1]}, 
//                         ${this.hobbies.playing[0]}, 
//                         ${this.hobbies.serious[1]}`
//                     }

// }

// console.log(jephtah.all_best())

// Btn.addEventListener("onclick", DoIt)

// Events

// let greet = " Hello welcome to ST Anns"
// let change_greet = greet.replace("Hello", "Hi")
// console.log(change_greet)
// console.log(greet)


// let col = [1,2,3,4,5,6,7,8,9,10]
// let item = ''
// col.forEach(counter)

// function to iterate through array

// function counter(value, index){
//     if(value % 2 == 0){
//         console.log(`${value} is in index ${index}`)
//     }
// }
// // using Map()
// new_arr = col.map((value,index) => {return value})

// // function increase(value, index){
// //     return value
// // }

// console.log(new_arr)

// for(i=0; i<col.length; i++){
//     if(col[i] > 6){
//         console.log(col[i])
//     }
// }

// let filtered = col.filter((value, index) => value >= 6 )
// console.log(filtered)

// function filt(value, index){
//     return value > 6
// }
// console.log(filtered)

// function func_name(){

// }

// () => {}
const styling = {styles: `background:tomato; color:#fff;`,
                    fonts:``

}

const Populate = document.querySelector("#incoming")
let message = `<strong> Our list below: </strong>`
let list = `<ul> <li> item 1 </li> <li> item 2 </li></ul>`
let button = ``
Populate.innerHTML = `${message} ${list}`
Populate.style = styling.styles;

