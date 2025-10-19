let mel = document.getElementById("mes-el")
let sumel = document.getElementById("sum-el")
let cardel = document.getElementById("card-el")
let monel = document.getElementById("mon")
let retel = document.getElementById("retry")
let firstcard = 0,secondcard = 0
let cardarray = []
let sum = 0
let message=""
let hasblackjack=false
let isalive =false;


let player={
    name: "Per:",
    money: 20
}
monel.textContent=player.name+" ₹"+player.money


function random(){
    if(isalive===true){
        let num =  Math.floor(Math.random() * 13)+1
        if (num===1){
            return 11;
        }
        else if(num>=11 && num<=13){
            return 10
        }
        else{
            return num
        }
    }
}
function update(){
    monel.textContent=player.name+" ₹"+player.money
}
function retry(){
    startgame()
    
}
function failptc(){
    retel.style.display = "block"
    document.getElementById("drw").style.display = "none"
}
function startgame(){
    money = 20
    isalive = true
    firstcard = random()
    secondcard = random()
    cardarray = [firstcard,secondcard]
    sum=firstcard+secondcard
    rendergame()
}

function rendergame(){
    retel.style.display = "none"
    document.getElementById("strt").style.display = "none"
    document.getElementById("drw").style.display = "block"
    
    
    if(sum<=20){
        message = "Do you want to draw a new card?"
        isalive = true;
    }
    else if(sum===21){
        message = "You've got Blackjack!"
        hasblackjack=true
        player.money+=10
        update()
        failptc()
    }
    else{
        message = "You're out of the game!" 
        isalive=false
        if(player.money>0)
        player.money-=10
        update()
        failptc()
    }
    mel.textContent=message
    cardel.textContent="Cards: "+cardarray
    sumel.textContent="Sum: "+ sum;
    
}

function drawcard(){
    if(isalive){
        let newcard = random()
        cardarray.push(newcard);
        sum += newcard;
        rendergame();
    }
}