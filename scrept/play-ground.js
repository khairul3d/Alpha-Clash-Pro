// function play(){
//     // home screen
//   const homeScreen = document.getElementById('home-screen');
//   homeScreen.classList.add('hidden');
// //   play graund
// const playGround = document.getElementById('play-ground');
// playGround.classList.remove('hidden')
// }



function hiddenEliment(playId){
    const homeScreen = document.getElementById(playId);
    homeScreen.classList.add('hidden');
}

function showEliment(playId){
    const homeScreen = document.getElementById(playId);
    homeScreen.classList.remove('hidden');
}


// continue game
function randomAlphabet(){
    const randomString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = randomString.split('');
    console.log(alphabets);

    const randomeNumber = Math.random()*25;
    const index = Math.round(randomeNumber);
     

    const alphabet = alphabets[index];
    // console.log(index,alphabet);
    return alphabet;
}
// update 1
function getTextElementById(elementId){
    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
    const value = parseInt(elementValue)
    return value;
}
// updated game
function setTextElementById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
    
}
function addColor(element){
    const colorId= document.getElementById(element);
    colorId.classList.add('bg-orange-400')
}
// key prass
function keyPrassEvent(event){
    const keyPrass= event.key;
    console.log(keyPrass)
    //  button a prass korsi ki na
    const correntAlphabet = document.getElementById('corrent-alphabet');
    const alphabet= correntAlphabet.innerText;
    const keyUp= alphabet.toLowerCase();
    // console.log(keyPrass,keyUp);
    
    //   key prass korla sothik ta passi ki na
    if( keyPrass === keyUp ){
        console.log('you get a point') ;

        console.log('you expected bet',keyUp);
        addColor(keyUp);
        continueGame();
        
    // update game
    const correntScore = getTextElementById('corrent-score');
    const updateScore = correntScore + 1;
    setTextElementById('corrent-score', updateScore)
        
    
    }
    else{
        console.log('wroung a point');

       const correntLife = getTextElementById('corrent-life');
       const lifeLog = correntLife - 1;
       setTextElementById('corrent-life', lifeLog);

       if(lifeLog === 0){
       gameOver()
     }
    }
}
document.addEventListener('keyup', keyPrassEvent)

// key prass end
function continueGame(){
    const alphabets= randomAlphabet();
    // console.log('your randome alphabet:',alphabets);

    const correntAlphabet = document.getElementById('corrent-alphabet');
    correntAlphabet.innerText = alphabets;
    addColor(alphabets)

}

function play(){
    hiddenEliment('home-screen');
    hiddenEliment('final-score')
    showEliment('play-ground');
    continueGame();
    setTextElementById('corrent-life',5);
    setTextElementById('corrent-score',0)

    
} 

function gameOver(){
    hiddenEliment('play-ground');
    showEliment('final-score')
    const lastScore= getTextElementById('corrent-score');
    setTextElementById('last-score',lastScore);
    }
    