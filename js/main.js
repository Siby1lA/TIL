const GAME_TIME = 9;
let score = 0;
let time = GAME_TIME;
let isPalying= false;
let timeInterval;
let checkInterval;
let words = [];
const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');
const btn = document.querySelector('.btn');

init();

function init(){
    getWords();
    wordInput.addEventListener('input', checkMatch);
}

// 게임 실행
function run(){
    if(isPalying){
        return;
    }
    isPalying = true;
    time = GAME_TIME;
    wordInput.focus();
    scoreDisplay.innerText = 0;
    timeInterval = setInterval(countDown, 1000);
    checkInterval = setInterval(checkStatus, 50);
    btnChange('게임중');
}

function checkStatus(){
    if(!isPalying && time === 0){
        btnChange('게임시작');
        clearInterval(checkInterval);
    }
}

// 단어 불러오기
function getWords(){
    words = ['Hello', 'Banana', 'Apple', 'Cherry'];
    btnChange('게임시작');
}


// 단어일치 체크
function checkMatch(){
    if(wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()){
        wordInput.value="";
        if(!isPalying){
            return;
        }
        score++;
        scoreDisplay.innerText = score;
        time = GAME_TIME;
    }
}



function countDown(){
    time > 0 ? time-- : isPalying = false;
    if(!isPalying){
        clearInterval(timeInterval);
    }
    timeDisplay.innerText = time;
}


function btnChange(text){
    btn.innerText = text;
    text === '게임시작' ? btn.classList.remove('loading') : btn.classList.add('loading');
}