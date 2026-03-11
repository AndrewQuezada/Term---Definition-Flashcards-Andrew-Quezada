let cards = [];

/* let term = document.getElementById('term');
let definition = document.getElementById('definition');
 */
function saveTerm(){
    let term = document.getElementById('term');
    let definition = document.getElementById('definition');
    let termOne = term.value.trim();
    let definitionOne = definition.value.trim();

    let saveTermObj = {
        term: termOne,
        definition: definitionOne,
    };

    cards.push(saveTermObj);
    console.log(saveTermObj);
    document.getElementById('term').value = "";
    document.getElementById('definition').value = "";
};

function setFlashcard(){
    let html = ``
        for (let i = 0; i < cards.length; i++){
                 html += `
                 <div class="card-contanainer" onclick="flipCard(${i})">
                        <div class="card" id="${i}">
                        
                        <div class="card-face card-front">${cards[i].term}</div>
                        
                        <div class="card-face card-back">${cards[i].definition}</div>
                        </div>
                    </div>
                    `;
                                                };
document.getElementById("display").innerHTML = html;

};

function flipCard(index){
    let card = document.getElementById(index);
    if(card.style.transform == 'rotateY(180deg)'){
        card.style.transform = 'rotateY(0deg)'
    } else {
        card.style.transform = 'rotateY(180deg)'
    }

}

function clearAll() {
     cards = [];
   document.getElementById('display').innerHTML="";

};