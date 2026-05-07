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
    img: "img/mail.png",
    text: "It is late in the afternoon, and as a student in a vocational education program, you have been working hard all day on an exam assignment. An email appears in your inbox that seems to be from your educational institution. What action you choose?",

    choices: [
      { text: "Red pill: Open the email to read the content", next: "scene2" },
      { text: "Blue pill: Ignore the email", next: "scene3" },
      { text: "Green pill: Report the email as suspicious", next: "scene4" },
      { text: "Hint", next: "keymaker1" }
    ]
  },

  keymaker1: {
    img: "img/keymaker.png",
    text: "The Keymaker appears: 'Be careful. Phishing emails often look real.'",

    choices: [
      {
        text: "Back",
        next: "scene1"
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

  // 1. Tekst
  if (scene.text) {
    const text = document.createElement("p");
    text.textContent = scene.text;
    container.appendChild(text);
  }

// 2. Billede
if (scene.img) {
  const img = document.createElement("img");
  img.src = scene.img;

  // styling
  img.style.maxWidth = "300px";
  img.style.display = "block";
  img.style.margin = "10px auto";

  container.appendChild(img);
}


  // 3. CHARACTER SELECT
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

  // 4. INTRO SCENES
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

  // 5. CHOICES (scene1 osv)
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
