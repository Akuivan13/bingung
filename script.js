// let username =

// document.getElementById("mySubmit").onclick = function() {
//     username = document.getElementById("myText").value;
//     console.log(username);
// document.getElementById("p1").textContent = `nama: ${username}`;
// }

//COUNT PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn")
const resetBtn = document.getElementById("resetBtn")
const increaseBtn = document.getElementById("increaseBtn")
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
    console.log(count)
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
    console.log(count)
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
    console.log(count)
}