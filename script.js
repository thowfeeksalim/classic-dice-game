'use strict';
const player0El=document.querySelector('.player--0')
const player1El=document.querySelector('.player--1')

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

let score,currentscore,activeplayer,playing;

const init = function(){

  score=[0,0];
  currentscore = 0;
  activeplayer=0
  playing =true;
  
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}
init();

const switchplayer = function(){
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentscore=0;
  activeplayer = activeplayer===0 ? 1:0;
  player0El.classList.toggle('player--active')
  player1El.classList.toggle('player--active')
}



btnroll.addEventListener('click', function () {

  if(playing){
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
  
    //display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    function finishgame(){
      playing=false;
      diceEl.classList.add('hidden')
      document.querySelector(`.player--${activeplayer}`).classList.add('player--winner')
      document.querySelector(`.player--${activeplayer}`).classList.remove('player--active')
    }

    if (dice == 6) {
      currentscore += dice;
      document.getElementById(`current--${activeplayer}`).textContent = currentscore
      // current0El.textContent = currentscore;
      if(playing){

  
        // 1.add current score to activeplayer score
        score[activeplayer]+= currentscore;
        document.getElementById(`score--${activeplayer}`).textContent=score[activeplayer];
        // 2.check if the player score is greater than 100
        if(score[activeplayer]>=100){
    
          finishgame()
      
        }
        // else{
        //   switchplayer();
        // }
      }
  
    }
    else{

      currentscore += dice;
      document.getElementById(`current--${activeplayer}`).textContent = currentscore
      // current0El.textContent = currentscore;
      if(playing){

  
        // 1.add current score to activeplayer score
        score[activeplayer]+= currentscore;
        document.getElementById(`score--${activeplayer}`).textContent=score[activeplayer];
        // 2.check if the player score is greater than 100
        if(score[activeplayer]>=100){
          finishgame()
          
      
        }
        else{
          switchplayer();
        }
      }
      
      // switchplayer();
      
  
    }
  }
});


btnnew.addEventListener('click',init);