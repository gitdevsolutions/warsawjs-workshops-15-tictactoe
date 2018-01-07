document.addEventListener('DOMContentLoaded',function(){
   
    var playerClasses ={
        'playerA': 'red',
        'playerB': 'blue'
    };
    var currentPlayer;
    var emptyFields;

initGame();
function initGame(){
   
    var fields = document.querySelectorAll('.board > div');
    currentPlayer = 'playerA';
    emptyFields = 9;
   
    fields.forEach(field => field.addEventListener('click',filedClickHandler));
   
}
function filedClickHandler(){
   var playerClass = playerClasses[currentPlayer];
   this.classList.add(playerClass);
   emptyFields--;
   currentPlayer =currentPlayer === 'playerA' ? 'playerB': 'playerA';
   this.removeEventListener('click',filedClickHandler);
   if (emptyFields === 0){
       alert('Koniec Gry!');
   }
   
}

});