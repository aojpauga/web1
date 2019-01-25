var data = [{
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

var names = null; // list of objects

var addMage = function() {
    var heading = document.querySelector("h1");
    console.log("the heading is", heading);

    // change the heading again when the button is clicked
    heading.innerHTML = "Mage";
    heading.style.color = "#00FF00";
    heading.style.backgroundColor = "blue";

    // add an item to the list when the button is clicked
    var titleDiv = document.querySelector("#title");
    var mageName = document.querySelector("#name");
    titleDiv.innerHTML = "This is your mage " + mageName.value;

    //add picture
    var imgDiv = document.querySelector("#image");
    imgDiv.innerHTML = "";
    var pic = document.createElement("img");
    pic.setAttribute("src", "vivimage.jpg");
    imgDiv.appendChild(pic);
};

var addWarrior = function() {
    // addHero({
    //   name: "Warrior",
    //   image: "warriordnd.png",
    //   color: "#00FF00",
    //   backgroundColor: "red"
    // });




    var heading = document.querySelector("h1");
    console.log("the heading is", heading);

    // change the heading again when the button is clicked
    heading.innerHTML = "Warrior";
    heading.style.color = "#00FF00";
    heading.style.backgroundColor = "red";

    // add an item to the list when the button is clicked
    var titleDiv = document.querySelector("#title");
    var warriorName = document.querySelector("#name");
    titleDiv.innerHTML = "This is your Warrior " + warriorName.value;

    //add picture
    var imgDiv = document.querySelector("#image");
    imgDiv.innerHTML = "";
    var pic = document.createElement("img");
    pic.setAttribute("src", "warriordnd.png");
    imgDiv.appendChild(pic);
};

var addRogue = function() {
    var heading = document.querySelector("h1");
    console.log("the heading is", heading);

    // change the heading again when the button is clicked
    heading.innerHTML = "Rogue";
    heading.style.color = "#00FF00";
    heading.style.backgroundColor = "green";

    // add an item to the list when the button is clicked
    var titleDiv = document.querySelector("#title");
    var rogueName = document.querySelector("#name");
    titleDiv.innerHTML = "This is your rogue " + rogueName.value;

    //add picture
    var imgDiv = document.querySelector("#image");
    imgDiv.innerHTML = "";
    var pic = document.createElement("img");
    pic.setAttribute("src", "rogue.gif");
    imgDiv.appendChild(pic);
};

var addRandomPlayer = function() {
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
warriorButton.onclick = function() {
    addWarrior();
}
var mageButton = document.querySelector("#mage-button");
console.log("the button is", mageButton);
mageButton.onclick = function() {
    addMage();
}
var rogueButton = document.querySelector("#rogue-button");
console.log("the button is", rogueButton);
rogueButton.onclick = function() {
    addRogue();
}

var randButtom = document.querySelector('#random-button');
console.log("the button is", randButtom);
randButtom.onclick = function() {
    addRandomPlayer();
}

var addHero = function(character) {
    var heading = document.querySelector("h1");
    console.log("the heading is", heading);

    // change the heading again when the button is clicked
    heading.innerHTML = character.name;
    heading.style.color = "#00FF00";
    heading.style.backgroundColor = "red";

    // add an item to the list when the button is clicked
    var titleDiv = document.querySelector("#title");
    titleDiv.innerHTML = "This is " + character.name;

    //add picture
    var imgDiv = document.querySelector("#image");
    imgDiv.innerHTML = "";
    var pic = document.createElement("img");
    pic.setAttribute("src", character.image);
    imgDiv.appendChild(pic);
};

fetch("https://api.myjson.com/bins/pmt6k").then(function(response) {
    response.json().then(function(data) {
        console.log("data loaded from server", data);
        names = data; // save for later
        // append to the page:
        var buttonsList = document.querySelector("#buttons")
        data.forEach(function(ch) {
            var b = document.createElement("button");
            b.innerHTML = `My Hero: ${ch.name}`;
            buttonsList.appendChild(b);
            b.onclick = function() {
                addHero(ch);
            };
        });
    });
});




//adding random - Math.random() - to convert to int - Math.floor(Math.random());
//json - java script object notation
//ajax - asychronous java script xlm
//fetch api -> fetch("paste url").then(function(response){respons.json().then(function(data)){console.log("the," data);}););
//document.querrySelectorAll()