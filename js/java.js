// Scener
const scenes = {
 const scenes = {

  // Intro-Scene
  characterSelect: {
    type: "character",

    text: "Choose your character",

    characters: [
      {
        name: "Neo",
        image: "images/neo.png",
        next: "neoIntro"
      },

      {
        name: "Trinity",
        image: "images/trinity.png",
        next: "trinityIntro"
      }
    ]
  },



  // Neo-intro
  neoIntro: {
    type: "intro",

    text: "You chose Neo",

    gif: "images/neo.gif",

    buttonText: "I'm in",

    next: "scene1"
  },



  // Trinity-intro
  trinityIntro: {
    type: "intro",

    text: "You chose Trinity",

    gif: "images/trinity.gif",

    buttonText: "Let's go",

    next: "scene1"
  },



  // Første scene i scenariet
  scene1: {
    text: "You receive a suspicious email.",

    choices: [
      {
        text: "Red pill",
        next: "scene2"
      },

      {
        text: "Blue pill",
        next: "scene3"
      }
    ]
  }

};

//Variabler
let currentScene = "characterSelect";
let selectedCharacter = "";


//Funktioner
function showScene(sceneId) {

}


//Listeners
document.getElementById("startButton").addEventListener("click", () => {

  document.getElementById("gameContainer")
    .scrollIntoView({ behavior: "smooth" });

  showScene("characterSelect");

});

