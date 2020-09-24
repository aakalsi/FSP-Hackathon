/*
PROBLEM STATEMENT
TDD1: The pages must be fully functional, responsive(mandatory) and user friendly.
Design specification and constraints
1. Components
    1.1 The game page will contain a circle divided into 4 quadrants. distinct color-coded quadrants in a circle. A color will blink at one of the quadrants.
    1.2 A play button to start the game and 
    1.3 a reset button to reset the game and 
    1.4 score field to display the scores in real-time.
2. Functionality 
    2.1 Once the player hits the play button, a blink of color will appear randomly on any one of the quadrants for 1 second.
    2.2 Now the player will identify the quadrant. In this example figure, it is quadrant 1 and clicks the quadrant.
    2.3 After the player's response, the blink will appear randomly on any quadrant. In this example figure, it is quadrant4. Now the player has to click Quadrant 1 first and then quadrant 4.
    2.4 After the response, it will blink on another random quadrant. In this case, it is quadrant 2. Now the player has to click quadrant 1, then quadrant 4 and then quadrant 2. The pattern is 1,4,2.
    2.5 On the right guess the blink will appear on any one of the 4 quadrants. In this example, it is quadrant 3. Now the right pattern for clicking will be 1,4,2,3
    2.6 Grow the pattern until the player loses the game by breaking the pattern by clicking the wrong quadrant.
    2.7. Once the game has ended display the result with game points accordingly


3. Tests to be passed
    1. click on play button will call the randomizer and display the icon in any of the four quadrants for 1 second. The position of the icon will be recorded to check the match with player's click. Play click will also reset the score display to zero.
    2. In first round, clicking on the correct quadrant will increase the score by 10 points in score display. Click will initiate the randomizer again to show the icon and record the position of the icon.
    3. if player's click on the 1st quadrant is correct, game will wait for him to select the second quadrant. if the second click is in correct quadrant, score is increased and randomizer is called again to display the icon for next round.
        3.1 if player's click is wrong for the 1st quadrant, game will end and the total score will be displayed and game end message pops up.
        3.2 if player's click on the 1st quardant is correct, but his click on subsequent quadrant is incorrect, game will end and the total score will be displayed and game end message pops up

4. Logic of the game

function resetGame(){
    reset score
    reset the random number storage array
}

function endGame(){
        show game end message in pop up
        show total score in pop up
}

function showIcon(){
    wait 1 sec
    call random function to gen random num between 1 to 4
    store the random number in a showArray
    display the icon for 1 sec based on the random number generated
}

function isNotValid(quad,i){
        if (quad != showArray[i]){
            showCross
            endGame();
        }
        showTick
        return;
}

function clickNCheck(quad){
     isNotValid(quad);
}

function startGame(){
    do{
        showIcon()
        i=0;
        while(i<showArray.length){
            clickNCheck(quad,i);
            i++;
        }
        inc score by 10 points
    }while(isNotValid(quad));

}
                                
click on play button
resetGame()
startGame()

click on reset button
resetGame()

5. 

*/


let gameGrid=document.createElement('div');
gameGrid.className='game-grid';
document.body.append(gameGrid);

let output=document.createElement('div');
output.className="output";
output.id='display';
output.innerText='Score Record';
gameGrid.append(output);

let quad1=document.createElement('button');
quad1.className='span4 quad1';
quad1.id='1';
quad1.innerText='1';
gameGrid.append(quad1);

let quad2=document.createElement('button');
quad2.className='span4 quad2';
quad2.id='2';
quad2.innerText='2';
gameGrid.append(quad2);

let quad3=document.createElement('button');
quad3.className='span4 quad3';
quad3.id='3';
quad3.innerText='3';
gameGrid.append(quad3);

let quad4=document.createElement('button');
quad4.className='span4 quad4';
quad4.id='4';
quad4.innerText='4';
gameGrid.append(quad4);

let play=document.createElement('button');
play.id='play';
play.innerText='Play!'
gameGrid.append(play);

let reset=document.createElement('button');
reset.id='reset';
reset.innerText='Reset!'
gameGrid.append(reset);

//function to increase the score [working]
function scoreInc(){
    resetGame();
    let score=document.getElementById('display');
    score.innerText = parseInt(score.innerText)+10;
}

//function to reset the game - score and showarray[working but pending]
function resetGame(){
    document.getElementById('display').innerText=0;
    numArray=[];
    // console.log(numArray);
}

//function to end the game
function endGame(){
        // To Do: show game end message in pop up
        // To Do: show total score in pop up
}

// random number generator [working]
function getRandomNumber() {
    let min=1,max=4;
    let random = min + Math.random() * (max + 1 - min);
    return `${Math.floor(random)}`;
  }
//  alert(getRandomNumber(1,4));

//show the color for 1 second
function showIcon(numArray){
    let randomNumber=getRandomNumber();
    numArray.push(randomNumber);
    document.getElementById(randomNumber).style.backgroundColor='#00FFFF';
    setInterval(function (){    
            document.getElementById(randomNumber).removeAttribute('style');
            }, 3000);
    console.log('showicon',numArray);
}

// function clickIsValid(round,quad,numArray){
//         console.log(round,quad,numArray);
//     for (let i=0;i<parseInt(round);i++ ){
//         if (parseInt(quad) === parseInt(numArray[i])){
//             // show tick mark if possible
//             console.log(numArray[i],quad,'click is valid');
//             // continue jump;
//         } else {
//         //     showCross
//         //     endGame();
//         console.log('end game -- add breaking');
//         }
//     }
//     return;
// }

// start the game

function startGame(){
        let numArray=[];
        showIcon(numArray);
        let quad,round=0;
        let quadrants=document.getElementsByClassName('span4');
        for(let i=0;i<quadrants.length;i++){
            quadrants[i].addEventListener('click',function(){
               quad=this.id;
               while(round<numArray.length){
                    if (parseInt(quad) === parseInt(numArray[round])){
                        // show tick mark if possible
                        console.log(numArray[round],quad,'click is valid');
                    } else {
                    //     showCross
                    //     endGame();
                    console.log('end game -- add breaking');
                    }
                    if (i===quadrants.length-1){
                        setTimeout(function (){    
                            showIcon(numArray);
                        }, 1000);
                    }
                }
                scoreInc();
            })
        }
}

// click on play button
document.getElementById('play').addEventListener('click',()=>{
    resetGame();
    startGame();
});

// click on reset button
document.getElementById('reset').addEventListener('click',resetGame);