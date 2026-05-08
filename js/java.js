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
      { text: "Blue pill: Ignore the email", next: "scene6" },
      { text: "Green pill: Report the email as suspicious", next: "scene7" },
      { text: "Hint", next: "keymaker1" },
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
  },

  // Scene 2 - Open email
  scene2: {
    img: "img/smithgif.gif",
    text: "You proberbly shouldn't have opened the email. are. What action do you choose?",

    choices: [
      { text: "Red pill: Click the link to log in", next: "scene3" },
      { text: "Blue pill: Go back and examine the email", next: "scene4" },
      { text: "Green pill: Go back", next: "scene1" },
    ]
  },

  // Scene 3 - Click the link
scene3: {
     img: "img/2svar.png",
    text: "The exam-stress has got the better of you, and you click without thinking. What action do you choose?",

    choices: [
      { text: "Red pill: I don't think about anything else than handing in the exam paper, so I click on the link that I think will lead me to the shcools log in page", next: "scene2" },
      { text: "Blue pill: Examine the email", next: "scene5" },
      { text: "Hint", next: "keymaker1" },
    ]
  },

  keymaker2: {
    img: "img/keymaker.png",
    text: "The Keymaker appears: 'Be careful. Some hackers try to lull you into a false sense of security.'",

    choices: [
      {
        text: "Back",
        next: "scene2"
      }
    ]
  },

  // Scene 4 - Sign in to fake student account 
scene4: {
         img: "img/smithgif.gif",
    text: "You click the link to log in, and you are taken to a page that looks exactly like your school's login page. What action do you choose?",

    choices: [
      { text: "Red pill: I can hardly think straight before exams and so I enter my login details", next: "badEnding1" },
      { text: "Blue pill: I go back andexamine the email", next: "scene5" },
    
    ]
  },

  badEnding1: {
  img: "img/bad1.jpg",
  text: "You clicked the phishing link. Suddenly the screen freezes, and you see a message that says 'Your computer is locked. Please pay to unlock it.' You have fallen victim to a ransomware attack. Game over.",

  choices: [
    {
      text: "Play again",
      next: "characterSelect"
    }
  ]
},

// Scene 6 - Ignore the email
scene6: {
  img: "img/welldone00.gif",
  text: "It's good that you didn't open the email. However, ignoring it doesn't protect you from future threats. You're still in the game",

    choices: [
        { text: "Report email as suspicious", next: "scene7" },
        { text: "Tjek if your system is updated", next: "scene8" },
        { text: "Keep ignoring it and focus on your studies", next: "scene1" },
    ]
},

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
