let result;
let score = 0;
let round = 1;
let num1, num2;
let IsCorrect, HasAnswered;
let val = 0;

function RightOrWrong(){
    let x = Math.random();
    let error;
    if(x < 0.5){//dung
        result = num1 + num2;
        error = true;
    }
    else{//sai
        do {
            result = Math.floor(Math.random() * (round * 2));
        } while ((result == (num1 + num2)) || (result == 0));
        error = false;
    }
    console.log("RightOrWrong run!");
    return error;
}

function setUpEvents(){
    setInterval(time, 10);
    setInterval(CheckTime, 10);   
    let choice = document.getElementsByClassName("choice");
    for(let i = 0; i < choice.length; i++){
        choice[i].addEventListener("click", function(e){
            let WhichChosen = e.target;
            let ChoiceIndex = WhichChosen.getAttribute("id");
            if (((ChoiceIndex == "correct") && (IsCorrect == true)) || ((ChoiceIndex == "wrong") && (IsCorrect == false))){
                score++;
                round++;
            }
            else{
                score = 0;
                round = 1;
                alert("WRONG!");
            }
            let scoreEl = document.getElementById("score");
            scoreEl.textContent = `SCORE = ${score}`; 
            console.log("setUpEvents");
            GenerateNum();
        });
    }
}

function GenerateNum(){
    do {
        num1 = Math.floor(Math.random() * (round + 1)); //Nhan cho man choi nguoi choi dang o
        num2 = Math.floor(Math.random() * (round + 1));
    } while((num1 == 0) || (num2 == 0));
    val = 0;
    IsCorrect = RightOrWrong();
    let DatTinh = document.getElementById("DatTinh");
    DatTinh.textContent = `${num1} + ${num2}`;
    let KetQua = document.getElementById("result");
    KetQua.textContent = ` = ${result}`
    console.log("GenerateNum")
}

function GenerateColor(){
    //tao mau nen ngau nhien
    let r = Math.floor(Math.random() * 200);
    let g = Math.floor(Math.random() * 200);
    let b = Math.floor(Math.random() * 200);
    let bgcolor = document.getElementById("root");
    bgcolor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

function time(){
    time = document.getElementById("time");
    val += 0.01
    time.textContent = `TIME: ${val.toFixed(2)}`
}

function CheckTime(){
        if(val >= 2){
            alert("Time's Up!")
            score = 0;
            round = 1;
            let scoreEl = document.getElementById("score");
            scoreEl.textContent = `SCORE = ${score}`; 
            val = 0;
            GenerateNum();
        }
}

GenerateColor();
GenerateNum();
CheckTime();
setUpEvents();
//Nghi cach lam sao dung cai HasAnswered de tiep tuc chuong trinh