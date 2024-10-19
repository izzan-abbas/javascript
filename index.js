// var a;
// var a = 40;
// var a = 50;
// console.log(a)

// document.write(a)
// let b = 40;
// b = 50;
// console.log(b)
// document.write(b)
// const c = 50;
// c = 50;
// console.log(c)
// document.write(c)
// data type in javascript

// integer in short int        number
// string in short str         string
// boolean in short bool       boolean
// null in short null          null
// undefined in short undef    undefined

// example of data type

// let a = 10;
// let b = "hello";
// let c = true;
// let d = null;
// let e = undefined;

// null in javascript
// null is a primitive data type in javascript.it is used to represents the absence of any object value

// undefined in javascript
// undefined is primitive data in javascript.it is used to represent an uninitialized variable or an XPathExpression


// primitive data type in javascript

// 1. number
// 2. string
// 3. boolean
// 4. null
// 5. undefined
// 6. Symbol
// 7. bigint

// non - primitive data type in javascript
// 1. arry
// 2. objects



// operator in javascript
// arithmatic operator +, -,*,/,%,**




// let a = 30;
// let b = 20;
// let c = a - b;
// console.log(c)
// let d = a * b;
// console.log(d)
// let e = a / b;
// console.log(e)
// let f = a % b;
// console.log(f)

// example of comparision operator in javascript
// let a = 10;
// let b = 20;
// console.log(a == b);
// console.log(a != b);
// console.log(a === b);
// console.log(a !== b);
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);

// example of logical operator 


// -------------------------------------------------------------------------------------------------------------------


// let num1 =parseInt(prompt("enter the first value"));
// let num2 =parseInt(prompt("enter the second value"));
// let c = num1 + num2;
// alert(c);



// let day =parseInt(prompt("enter days of week"))
// if (day==1){
//     alert("monday")
// }else if (day==2){
//     alert("tuesday")
// }else if (day==3){
//     alert("wednesday")
// }else if (day==4){
//     alert("thursday")
// }else if (day==5){
//     alert("friday")
// }else if (day==6){
//     alert ("saturday")
// }else if (day==7){
//     alert("sunday")
// }else{
//     alert("invalid day")

// }


// let email = "izzan@gmail.com"
// let password = "12345"

// let newemail = prompt("Enter your email");
// let pasword = prompt("Enter your password");

// if (newemail == email && password == pasword) {
//     alert("login success")
// }
// else {
//     alert("login failed")
// }


// let balance = 10000

// let transection = prompt("enter your choice (type 'deposit' or 'withdraw')")
// let amount = prompt("enter the amount:")

// if (transection ==="deposit" ){
//     balance += parseInt(amount)
//     alert("your balance is: " + balance)
// }else if (transection === "withdraw"){
//     if(parseInt(amount) <= balance){
//         balance -= parseInt(amount)
//         alert("your remaining balance is: " + balance)
//     }
// }
// else{
//     alert("invalid choice ")
// }

// let person = {
//     name: "ahmed",
//     age : "20",
//     gender : "male",
//     education : "bs",
//     address : "lahore",
//     hobby :{
//         interest:"coding",
//     }
//     console.log(`the name of student ${person.name} and age is ${person,age} and education ${person.education} and address ${person.address} and hobby ${person.hobby}`)
// }


// let airpro =[
//       [
//         name:"airpro",
//       price: 5000,
//       color:"red",
//       model: "2024",
//       engine:{
//         type:"jet",
//         power:"5000",
//     }
// ]
// console.log(array[0].engine.power)



    // let products = 
    //     {
    //         "id": 1,
    //         "title": "Essence Mascara Lash Princess",
    //         "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    //         "category": "beauty",
    //         "price": 9.99,
    //         "discountPercentage": 7.17,
    //         "rating": 4.94,
    //         "stock": 5,
    //         "tags": [
    //             "beauty",
    //             "mascara"
    //         ],
    //         "brand": "Essence",
    //         "sku": "RCH45Q1A",
    //         "weight": 2,
    //         "dimensions": {
    //             "width": 23.17,
    //             "height": 14.43,
    //             "depth": 28.01
    //         },
    //         "warrantyInformation": "1 month warranty",
    //         "shippingInformation": "Ships in 1 month",
    //         "availabilityStatus": "Low Stock",
    //         "reviews": [
    //             {
    //                 "rating": 2,
    //                 "comment": "Very unhappy with my purchase!",
    //                 "date": "2024-05-23T08:56:21.618Z",
    //                 "reviewerName": "John Doe",
    //                 "reviewerEmail": "john.doe@x.dummyjson.com"
    //             },
    //             {
    //                 "rating": 2,
    //                 "comment": "Not as described!",
    //                 "date": "2024-05-23T08:56:21.618Z",
    //                 "reviewerName": "Nolan Gonzalez",
    //                 "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
    //             },
    //             {
    //                 "rating": 5,
    //                 "comment": "Very satisfied!",
    //                 "date": "2024-05-23T08:56:21.618Z",
    //                 "reviewerName": "Scarlett Wright",
    //                 "reviewerEmail": "scarlett.wright@x.dummyjson.com"
    //             }
    //         ],
    //         "returnPolicy": "30 days return policy",
    //         "minimumOrderQuantity": 24,
    //         "meta": {
    //             "createdAt": "2024-05-23T08:56:21.618Z",
    //             "updatedAt": "2024-05-23T08:56:21.618Z",
    //             "barcode": "9164035109868",
    //             "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
    //         },
    //         "images": [
    //             "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
    //         ],
    //         "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
    //     },

    // let number = [
    //     1, 2, 3, 4, 5, 6,
    // ]
    // for(let i=0; i<number.length; i++){
    //     console.log(number[i]+5*4)
    // }



    // let a = 3;
    // let b = 2;
    // console.log("a =", a, "& b =", b);
    // console.log("a + b =", a + b);
    // console.log("a - b =", a - b);
    // console.log("a * b =", a * b);
    // console.log("a / b =", a / b);
    // console.log("a % b =", a % b);
    // console.log("a ** b =", a ** b);

    // let a = 3;
    // let b = 4;

    // console.log("a++", a++);
    // console.log("a", a);
    // console.log("++a", ++a);
    // console.log("a", a);
    // console.log("b--", b--);
    // console.log("b", b);
    // console.log("--b", --b);
    // console.log("b", b);



//assaignment Operators

// let a = 4;
// let b = 5;

// a += 3;
// console.log("a =", a);

// let c = 2;
// let d = 7;

// c -= 3;
// console.log("c =", c)


//CONDITION STATEMENT

// let num = 12;

// if(num % 2 === 0){
//     console.log(num, "is even")
// }else{
//     console.log(num, "is odd")
// }



// -----------




// let personAccount =true;

// if(personaccount ==true){
//     console.log("your account is active and your balance is $1000");
// }else{
//     console.log
// }


// let accountnumber = 4847486;
// let email1 = "mudassar@gmail.com";
// let personAccount =parseInt(prompt("enter your account number"));
// let emailid = prompt("enter your email")

// if(accounnumber == personAccount && email1 == emailid){
//     alert("account number is valid balance is $10000")
// }else{
//     alert("please give valid info")
// }

// let age = 18;
// age>=18 ? console.log("you'r eligible to vote"):console.log("you'r not eligible to vote")

//  let name = prompt("enter your name");
//  let age = parseInt(prompt("enter your age"))
//  let address = prompt("enter your address");
//  let education = prompt("enter your education");
//  let city = prompt("enter your name");
//  let degree = prompt("enter your name");

// let a = parseInt(prompt("enter your amount"));
// let totalamount = purchase;
// if(a >=2000 && a <2500 ){
//     totalamount = purchase - 200
//     alert(`your amount after discount ${totalamount}`)
// }else if(a >=1500 && a <2000){
//     totalamount = purchase - 150
//     alert(`your amount after discount ${totalamount}`)
// }else if(a >=1000 && a <1500){
//     totalamount = purchase - 100
//     alert(`your amount after discount ${totalamount}`)
// }else if(a < 1000){
//     totalamount = purchase - 50
//     alert(`your amount after discount ${totalamount}`)
// }else{
//     alert("no discount")
// }







let num = parseInt(prompt("enter number"));
