let card = document.querySelectorAll(".card");
let frocard = document.querySelectorAll(".fro-img");


cardclick();

function cardclick(){
    for (let i=0; i<card.length; i++){
        card[i].addEventListener('click', ()=>{
            frocard[i].classList.add('flip');
        })
    }
}























// console.log(cardclick);
// cardclick.addEventListener('click', function(){
//     console.log(this);
// })




// document.getElementsByClassName('card').addEventListener("click", toggle("flip"));

// function clickcard(event) {
//     console.log(event);
//     let element = document.getElementsByClassName("card");
//     element.classlist.toggle("card flip");
// }

