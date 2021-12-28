 const player = document.getElementById('player');
 const timeContainer = document.getElementById('timeContainer');
 const startButton = document.getElementById('start-btn');
 const restartButton = document.getElementById('restart-btn');
 const pauseButton = document.getElementById('pause-btn');
 const easy = document.getElementById('easy');
 const medium = document.getElementById('medium');
 const hard = document.getElementById('hard');
 const free = document.getElementById('free');
 const sansContainer = document.getElementById('sansContainer');

 startButton.addEventListener("click",start);
 restartButton.addEventListener("click",restart);
 player.addEventListener("mouseover",plusPoints);

let points = 0;
let time = 80;
let counter= 0;

difficulty();

function start() {
    difficulty();
    timer();
    play();
    points = 0;
    time = 80;

    // if(counter>-1){
    //     startButton.disabled=true;
    // }
    // counter++;
};

function restart() {
    points = 0;
    time = 80;
    pause();
    play();
};


function plusPoints() {
    points++;
    document.getElementById("points").innerHTML = `<p>Points: <b>${points} / ${neededPoints} </b></p>`
    let randomNum = Math.floor(Math.random()*480);
    let randomNum2 = Math.round(Math.random()*480);
    player.style.marginTop = randomNum+"px";
    player.style.marginLeft = randomNum2+"px";
    if (time == 0) {
        points == 0;
    }
};

function timer() {
    timeContainer.innerHTML = `<p>Time: <b>${time}</b> </p>` 
    if(time==0 && points >= neededPoints){
        prompt("¡Congrats, you win!");
        time == 0
    }
    if(time==0 && points < neededPoints){
        alert("You loose, better luck next time.");
        time == 0;
    }   
    if(time>=1){
        time-=1;
        setTimeout("timer()",1000);
    };
};

function play() {
    var audio = new Audio('../assets/audio.mp3');
    audio.volume = 0.1;
    audio.play();
};

function pause() {
    var audio = Audio('../assets/audio.mp3');
    audio.stop();
};

function difficulty() {
    if(free.checked) {
        player.style.transitionDuration = "0.5s";
        neededPoints = 0;
    };
    if(easy.checked) {
        player.style.transitionDuration = "1.2s";
        neededPoints = 50;
    };
    if(medium.checked) {
        player.style.transitionDuration = "0.8s";
        neededPoints = 130;
    };
    if(hard.checked) {
        player.style.transitionDuration = "0.3s";
        neededPoints = 160;
    };
    if(sans.checked) {
        player.style.transitionDuration = "";
        neededPoints = 180;
    };
};
