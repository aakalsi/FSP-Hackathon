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
gameGrid.className="game-grid";
document.body.append(gameGrid);

let output=document.createElement('div');