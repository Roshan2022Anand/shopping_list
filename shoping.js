const prompt = require('prompt-sync')();
let shopingList = ['carrot','biscute'];
console.log(shopingList);
let x = true;
while(x){
    
    let choice = prompt("Do you want to add or remove item from the list :");
    switch(choice){
        case 'add':let item = prompt("Enter the item :");
                   shopingList.push(item);
                    break;
        case 'remove':shopingList.pop();
                    break;
        default : console.log('Exiting...')
                    x = false;
                    return;
    }
    console.log(shopingList);
}

//functions of array forEach map filter reduce
// a.forEach((num,i,a)=>{
//     console.log(a[i],'=',num);
// });