var people = ['Greg', 'Mary', 'Devon', 'James'];
// 1. Using a loop, iterate through this array and console.log all of the people.
console.log("1.---------------------");
for(let person of people){
    console.log(person);
}

// 2. Write the command to remove "Greg" from the array.
console.log("2.---------------------");
let peopleClone = people.slice(0);
peopleClone.shift();
console.log(peopleClone);

// 3. Write the command to remove "James" from the array.
console.log("3.---------------------");
let removePeople = (people, ...names) => {
    for(let i = 0 ; i < people.length ; i++){
        for(name of names){
            if(people[i] === name){
                people.splice(i , 1);
            }
        }
    }
    return people;        
} 
peopleClone = people.slice(0);
peopleClone.pop();
console.log(peopleClone);
// 4. Write the command to add "Matt" to the front of the array.
console.log("4.---------------------");
peopleClone = Object.assign([], people);
peopleClone.unshift("Matt");
console.log(peopleClone);


// 5. Write the command to add your name to the end of the array.
console.log("5.---------------------");
peopleClone = Object.assign([], people);
peopleClone.push("Thor");
console.log(peopleClone);


// 6. Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
console.log("6.---------------------");
for(let person of people){
    console.log(person);
    if(person === 'Mary'){
        break;
    }
}

// 7. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
console.log("7.---------------------");
peopleClone = [];
let beginIdx = 0
for(let i = 0 ; i < people.length ; i++){
    let peopleClone2 = peopleClone;
    if(people[i] === "Mary" || people[i] === "Matt"){
        Object.assign(peopleClone, peopleClone2, people.slice(beginIdx, i));
        beginIdx = i + 1; 
    }else if(i == people.length - 1){
        Object.assign(peopleClone, peopleClone2, people.slice(beginIdx, i + 1));
    }
}
//console.log(peopleClone);
/* ['Matt', 'Mary', 'Devon', 'James'];
希望可以透過 slice 的方式取得一份複製的陣列，而該陣列的內容是 ['Devon', 'James']，
不需要考慮動態陣列的問題，就依目前有的資料處理即可.
這題的最佳解是一行程式
*/
people = ['Matt', 'Mary', 'Devon', 'James'];
peopleClone = people.slice(2);
console.log(peopleClone);


// 8. Write the command that gives the indexOf where "Mary" is located.
console.log("8.---------------------");
console.log(people.indexOf("Mary"));

// 9. Write the command that gives the indexOf where "Foo" is located (this should return -1).
console.log("9.---------------------");
console.log(people.indexOf("Foo"));


// 10. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
console.log("10.---------------------");
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);