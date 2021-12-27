class Card{
    photo;
    title;
    content;
    like;
    constructor(photo,title,content,like) {
        this.photo = photo;
        this.title = title;
        this.content = content;
        this.like = like;
      }
}

let cardList = new Array();
// init();

// function init(){
//     let card = new Card();
//     card.photo = "forblog1.jpeg";
//     card.title = "Paul walker1";
//     card.content = "checking";
//     card.like = 1;
//     console.log("new")
//     addCard(card);

//     let card2 = new Card();
//     card2.photo = "forblog1.jpeg";
//     card2.title = "Paul walker2";
//     card2.content = "chekif";
//     card2.like = 0;
//     addCard(card);
// }

function addCard(card){
    let newCard = new Card();
    newCard.photo = card['photo'];
    newCard.title = card['title'];
    newCard.content = card['content'];
    newCard.like = card['like'];

    cardList.push(newCard);
    displayCard();
}


localStorage.setItem("cardList", JSON.stringify(Card) );
localStorage.getItem(parseInt(cardList,));

function displayCard(){
    let card1 = "";
    for(i = 0;i<cardList.length;i++){
        let card = cardList[i];
        console.log(card);
        card1 = card1 + "<div class='card'><img src="+card['photo']+" alt='Image displayed here' style='width:100%'><div class='container'><h4><b>"+card['title']+"</b></h4> <p>"+card['content']+"</p><button class='like__btn' id = 'card"+i+"' value = "+i+" onclick = like(document.getElementById('card"+i+"').value)><span id='icon'><i class='far fa-thumbs-up'></i></span><span id='count'>"+card['like']+"</span> Like</button>" + "<button class='delete__btn' id = 'card"+i+"' value = "+i+" onclick = deleteof(document.getElementById('card"+i+"').value)><span id='count'>"+deleteCard['delete']+"</span> Like</button></div></div>"
    }
    document.getElementById("card").innerHTML = card1;
    
}

function myFunction(){
    let card = new Card();
    card.photo = "forblog1.jpeg";
    card.title = "Paul walker1";
    card.content = "bala bala bala";
    card.like = 0;
    addCard(card);
}

function postbutton(){
    let card = new Card();
    card.photo = document.getElementById('myFile').value;
    console.log(card.photo)
    card.title = document.getElementById('title').value;
    card.content = document.getElementById('content').value;
    card.like = 0;

    addCard(card);
}

function like(value){
    console.log(value);
    let card = cardList[value];
    console.log(card);
    card['like'] = parseInt(card['like']) + 1;
    displayCard();
}

function deleteCard(value){
  console.log(value);
  let card = cardList[value];
  console.log(card);
  cardList.splice(value,1);
  displayCard();
}

var fileTag = document.getElementById("filetag"),
    preview = document.getElementById("preview");
    
fileTag.addEventListener("change", function() {
  changeImage(this);
});

function changeImage(input) {
  var reader;

  if (input.files && input.files[0]) {
    reader = new FileReader();

    reader.onload = function(e) {
      preview.setAttribute('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}
