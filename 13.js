//bai 13
//13.1
let arr = [
    {Name: 'HTML', Complete: false},
    {Name: 'CSS', Complete: false},
    {Name: 'Basics of JavaScript', Complete: false},
    {Name: 'Node Package Manager', Complete: false},
    {Name: 'Git', Complete: false}
];
for(let i=0;i<arr.length;i++){
    console.log(arr[i].Name);
    console.log(`Complete: ${arr[i].Complete}`);
}
while (true){
    let x = prompt('Enter your command (new,delete, update, complete');
    if(x==='New'||x==='new'){
        let newTask = prompt('Enter the new task');
        arr.push({Name: newTask, Complete: false});
    
    }else if(x==='update'||x==='Update'){
        let position = Number(prompt('Enter position: '));
        let title = prompt('Enter new title');
        arr[position-1].Name = title;
    }else if(x==='delete'||x==='Delete'){
        let position = Number(prompt('Enter position: '));
        arr.splice(position-1, 1);
    }else if(x==='complete'||x==='Complete'){
        let position = Number(prompt('Enter position: '));
        arr[position-1].Complete = true;
    }else {
        break;
    }
    console.log('Hi there, this is your learning tasks to front-end developer career: ');
    for (let i = 0; i < arr.length; i++){
        console.log(`${i+1}. ${arr[i].Name}`);
        console.log(`Complete: ${arr[i].Complete}`);
}
}
console.log('Hi there, this is your learning tasks to front-end developer career: ');
for (let i = 0; i < arr.length; i++){
    let x = ' ';
    if (arr[i].Complete === true){
        x = 'X';
    } 
    console.log(`${i+1}. [${x}] ${arr[i].Name}`);
}