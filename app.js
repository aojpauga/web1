var characters = [
  {
    "name": "Link",
    "image": "link.png"
  },
  {
    "name": "Vivi",
    "image": "vivismall.jpg"
  },
  {
    "name": "Thief",
    "image": "rogue.gif"
  }
]

var addMage = function () {
  var heading = document.querySelector("h1");
  console.log("the heading is", heading);
  heading.innerHTML = "You chose Mage!";

  // change the heading again when the button is clicked
  heading.innerHTML = "Mage";
  heading.style.color = "#00FF00";
  heading.style.backgroundColor = "blue";

  // add an item to the list when the button is clicked
  var theList = document.querySelector("#the-list");
  console.log("the list is", theList);
  var newItem = document.createElement("li");
  var mageName = document.querySelector("#name");
  newItem.innerHTML = "This is your Mage, " + mageName.value;
  theList.appendChild(newItem);

  //add picture
  var pic = document.createElement("IMG");
  pic.setAttribute("src", "vivismall.jpg");
  document.body.appendChild(pic);
};

var addWarrior = function () {
  var heading = document.querySelector("h1");
  console.log("the heading is", heading);
  heading.innerHTML = "You chose Warrior!";

  // change the heading again when the button is clicked
  heading.innerHTML = "Warrior";
  heading.style.color = "#00FF00";
  heading.style.backgroundColor = "red";

  // add an item to the list when the button is clicked
  var theList = document.querySelector("#the-list");
  console.log("the list is", theList);
  var newItem = document.createElement("li");
  var warriorName = document.querySelector("#name");
  newItem.innerHTML = "This is your Warrior, " + warriorName.value;
  theList.appendChild(newItem);

  //add picture
  var pic = document.createElement("IMG");
  pic.setAttribute("src", "link.png");
  document.body.appendChild(pic);
};

var addRogue = function () {
  var heading = document.querySelector("h1");
  console.log("the heading is", heading);
  heading.innerHTML = "You chose Rogue!";

  // change the heading again when the button is clicked
  heading.innerHTML = "Rogue";
  heading.style.color = "#00FF00";
  heading.style.backgroundColor = "green";

  // add an item to the list when the button is clicked
  var theList = document.querySelector("#the-list");
  console.log("the list is", theList);
  var newItem = document.createElement("li");
  var rogueName = document.querySelector("#name");
  newItem.innerHTML = "This is your rogue, " + rogueName.value;
  theList.appendChild(newItem);

  //add picture
  var pic = document.createElement("IMG");
  pic.setAttribute("src", "rogue.gif");
  document.body.appendChild(pic);
};

var addRandomPlayer = function (){
  var r = Math.random();
  if (r < 0.3333) {
    addWarrior();
  } else if (r < 0.6666) {
    addMage();
  } else {
    addRogue();
  }
};

var warriorButton = document.querySelector("#warrior-button");
console.log("the button is", warriorButton);
warriorButton.onclick = function () {
  addWarrior();
}
var mageButton = document.querySelector("#mage-button");
console.log("the button is", mageButton);
mageButton.onclick = function () {
  addMage();
}
var rogueButton = document.querySelector("#rogue-button");
console.log("the button is", rogueButton);
rogueButton.onclick = function () {
  addRogue();  
}

var randButtom = document.querySelector('#random-button');
console.log("the button is", randButtom);
randButtom.onclick = function() {
  addRandomPlayer();
}

fetch("https://api.myjson.com/bins/pmt6k").then(function (response) {
  response.json().then(function (data) {
    console.log("data loaded from server", data);
    data.forEach(function(ch) {
      var img = document.createElement("img");
      img.src = ch.image;
      document.appendChild(img);
    });
  });
});


//adding random - Math.random() - to convert to int - Math.floor(Math.random());
//json - java script object notation
//ajax - asychronous java script xlm
//fetch api -> fetch("paste url").then(function(response){respons.json().then(function(data)){console.log("the," data);}););
//document.querrySelectorAll()


