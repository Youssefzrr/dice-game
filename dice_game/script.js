var randoNumber1=Math.floor(Math.random()*6)+1;
var imageRandom="images/dice"+randoNumber1+".png";
var randoNumber2=Math.floor(Math.random()*6)+1;
var imageRandom1="images/dice"+randoNumber2+".png";
var image=document.querySelectorAll("img")[0];
var image2=document.querySelectorAll("img")[1];
image.setAttribute("src",imageRandom);
image2.setAttribute("src",imageRandom1);
hid=document.querySelector("h1");
if(randoNumber1>randoNumber2){
    hid.innerHTML="🚩 Player 1 Wins"
}
else if(randoNumber1<randoNumber2){
    hid.innerHTML="Player 2 Wins 🚩"
}
else{
    hid.innerHTML="Draw"
}


