document.addEventListener('DOMContentLoaded',function(){
    //inicjalizacja gry
initGame();
function initGame(){
    //znajduje wszystkie divy-robi je klikalne
    var fields = document.querySelectorAll('.board > div');
    //dla kazdego pola dodaje funkcje po kliknieciu
    fields.forEach(field => field.addEventListener('click',filedClickHandler));
}
function filedClickHandler(){
    //drukuje Hello w konsoli
    console.log("Hello",this);
}

});