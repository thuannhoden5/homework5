// bai 1:
// 1.1: property
//1.2
const product ={
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white',
};
for(let x in product){
    console.log(`${x} : ${product[x]}`);
}
//bai 2:
const task = {
    subject: 'Implement login feature',
    createdBy: 'Hoang Ngoc Duc',
    assignTo: 'Nguyen Phuong Nam',
    dueDate: '2019-10-08T18: 00: 24+ 0000',
    expectedHours: 0.5,
};
let {subject, dueDate, assignTo} = task;
console.log(subject);
console.log(dueDate);
console.log(assignTo);
//bai 3:
// 3.1 : Object
// 3.2 : Array
// 3.3 : 


let n = jobSearch.hits.length
for(let i =0;i<n;i++){
console.log(jobSearch.hits[i].jobTitle);

console.log(jobSearch.hits[i].benefits);
console.log(jobSearch.hits[i].salary);
console.log(jobSearch.hits[i].location);
console.log(jobSearch.hits[i].skill);
console.log(jobSearch.hits[i].requirements);

}
//bai 4-6

 let keyWord ={
     debug: 'the process of figuring out why your program has a certain error and how to fix it',
     done: 'when your task is complete, the only thing you have to do is to wait for users to use it(no additional codes or actions needed)',
     defect: 'the formal word for "error"',
     pm: 'the short version of Project Manager, the person in charge of the final result of a project',
     UI: 'UI means User Interface, is the process to define how your products looks and feels',
     UX: 'UX mean User Experience, is the process to define how your products looks and feels',
 };
 while (true){
     alert ('Hi there, this is dev dictionary')
     let x = prompt('enter a keyword');
     if(keyWord[x]===null||keyWord[x]===undefined){
       alert(`we could not find your word: ${x} `);
       let explanation = prompt(`We could not find your word: ${x} , leave your explanation`);
       keyWord[x]= explanation;
       alert('Done');
     }else{
         alert(`${x} : ${keyWord[x]}`);
     }
 }

 //bai 7 -12
 let phone = [
    {Name: 'Xiaomi portable charger 20000mah', Brand: 'Xiaomi', Price: 428, Color: 'White', Category: 'Charger'},
    {Name: 'VSmart Active 1', Brand: 'VSmart', Price: 5487, Color: 'Black', Category: 'Phone'},
    {Name: 'IPhone X', Brand: 'Apple', Price: 21490, Color: 'Gray', Category: 'Phone'},
    {Name: 'Samsung Galaxy A9', Brand: 'Samsung', Price: 8490, Color: 'Blue', Category: 'Phone'}
 ]
 let n = phone.length;
 for (let i=0; i<n; i++){
     console.log('-----------------');
     console.log(`Name: ${phone[i].Name}`);
     console.log(`Price: ${phone[i].Price}`)
 }
 // print out the products based on category input by user
 let category = prompt('enter your category')
 for (let i=0; i<n;i++){
     if(phone[i].Category===category){
        console.log('-----------------');
        console.log(`Name: ${phone[i].Name}`);
        console.log(`Price: ${phone[i].Price}`)
     }
 }

// Write a script printing/logging out the products with their number, then print/logging out the details of a product with its position entered by users
for (let i=0; i<n; i++){
    console.log(`#${i+1} ${phone[i].Name}`);
    console.log(`Price: ${phone[i].Price}`);
}
let position = prompt('enter product position');
for(let x in phone[position-1]){
    console.log(`${x}: ${phone[position-1][x]}`);
}
//And printing/logging out all of the products
phone [0].Providers = ['Phukienzero', 'Dientuccc'];
phone [1].Providers = ['Tgdd', 'Ddghn', 'VhStore'];
phone [2].Providers = 'Tgdd';
phone [3].Providers = 'Tgdd';
for(let i=0;i<n;i++){
    console.log(`#${i+1}: ${phone[i].Name}`);
    console.log(`Price : ${phone[i].Price}`);
    console.log(`Providers: ${phone[i].Providers}`);
}

//
let provider = prompt('Enter provider');
for (let i=0; i<n;i++){
    console.log('-----------------');
    if(phone[i].Providers.includes(provider)){
        for(let x in phone[i]){
            console.log(`${x}: ${phone[i][x]}`);
        }
    }
}