var num1 = Math.random();
num1*=6;
num1=Math.floor(num1)+1;
console.log(num1);
var firstDice = "images/dice"+num1+".png";
document.querySelector(".img1").setAttribute("src",firstDice);

var num2 = Math.random();
num2*=6;
num2=Math.floor(num2)+1;
console.log(num2);
var secDice = "images/dice"+num2+".png";
document.querySelector(".img2").setAttribute("src",secDice);

var text;
if(num1>num2){
    text = "🏆 Player 1 wins!";
}
else if(num1<num2){
    text = "Player 2 wins! 🏆";
}
else{
    text = "It's a Draw";
}

document.querySelector("h1").innerHTML = text;