// Scener
 const scenes = {

  // Intro
  characterSelect: {
    type: "character",

    text: "Choose your character",

    characters: [
      {
        name: "Neo",
        image: "img/neo.png",
        next: "neoIntro"
      },

      {
        name: "Trinity",
        image: "img/trinity.png",
        next: "trinityIntro"
      }
    ]
  },

  // Neo-intro
  neoIntro: {
    type: "intro",

    text: "You chose Neo",

    gif: "img/neogif.gif",

    buttonText: "I'm in",

    next: "scene1"
  },


  // Trinity-intro
  trinityIntro: {
    type: "intro",

    text: "You chose Trinity",

    gif: "img/trinitygif.gif",

    buttonText: "Let's go",

    next: "scene1"
  },


  // Første rigtige scene i scenariet
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

  const scene = scenes[sceneId];
  const container = document.getElementById("gameContainer");

  container.innerHTML = "";

  console.log(scene);

  // 1. TEXT (hvis den findes)
  if (scene.text) {
    const text = document.createElement("p");
    text.textContent = scene.text;
    container.appendChild(text);
  }

  // 2. CHARACTER SELECT
  if (scene.type === "character") {

    scene.characters.forEach(char => {

    const card = document.createElement("div");
    card.classList.add("character-card");

    const img = document.createElement("img");
    img.src = char.image;
    img.classList.add("character-img");

    const name = document.createElement("p");
    name.textContent = char.name;

    card.appendChild(img);
    card.appendChild(name);

    card.addEventListener("click", () => {
      showScene(char.next);
    });

    container.appendChild(card);
  });
  }

  // 3. INTRO SCENES
  if (scene.type === "intro") {

    const gif = document.createElement("img");
    gif.src = scene.gif;

    const btn = document.createElement("button");
    btn.textContent = scene.buttonText;

    btn.addEventListener("click", () => {
      showScene(scene.next);
    });

    container.appendChild(gif);
    container.appendChild(btn);
  }

  // 4. CHOICES (scene1 osv)
  if (scene.choices) {

    scene.choices.forEach(choice => {

      const btn = document.createElement("button");
      btn.textContent = choice.text;

      btn.addEventListener("click", () => {
        showScene(choice.next);
      });

      container.appendChild(btn);
    });
  }
}

//Listeners
document.getElementById("startButton").addEventListener("click", () => {

  document.getElementById("gameContainer")
    .scrollIntoView({ behavior: "smooth" });

  showScene("characterSelect");

});
