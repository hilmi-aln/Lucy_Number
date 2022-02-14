let number = document.getElementById("guess");
let button = document.querySelectorAll("button")[0];
let attempt = document.querySelectorAll(".attempt")[0];
let result = document.querySelectorAll(".remaining_attempt")[0];
let surprise = document.querySelectorAll("img")[0];
let lucyNumber = Math.floor(Math.random() * 101);


let minNum = 0;
let maxNum = 100;
let i = 5;
if (i>0) {
    button.addEventListener("click",() => {
        i--;
        if (number.value < lucyNumber) {
            minNum = number.value;
            result.innerHTML = `Lucy number is ${minNum} between ${maxNum}.`;
            if (i <= 0) {
                result.innerHTML = "YOU LOST";
                return;
            }
            
        }else if(number.value>lucyNumber){
            maxNum = number.value;
            result.innerHTML = `Lucy number is ${minNum} between ${maxNum}.`;
            if (i <= 0) {
                result.innerHTML = "YOU LOST"
                return;
            }
            
        }else{
            result.innerHTML="You are winner";
            surprise.setAttribute("src", "./celebratory-boom-boom.gif");
            // button.innerHTML=`<button type="reset">RESET</button>`;
            if (i <= 0) {
                result.innerHTML = "YOU LOST"
                return;
            }
        }attempt.innerHTML = `You have ${i} attempts.`
    });
    
};

