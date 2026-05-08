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
      { text: "Red pill: You don't think about anything else than handing in the exam paper, so you click on the link that you think will lead me to the shcools log in page", next: "scene2" },
      { text: "Blue pill: Examine the email", next: "scene5" },
      { text: "Hint", next: "keymaker2" },
    ]
  },

  keymaker2: {
    img: "img/keymaker.png",
    text: "The Keymaker appears: 'Be careful. Some hackers try to lull you into a false sense of security.'",

    choices: [
      {
        text: "Back",
        next: "scene3"
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
  img: "img/wd.gif",
  text: "It's good that you didn't open the email. However, ignoring it doesn't protect you from future threats. You're still in the game",

    choices: [
        { text: "Red pill: Report email as suspicious", next: "scene7" },
        { text: "Blue pill: Check if your system is updated", next: "scene8" },
        { text: "Green pill: Keep ignoring it and focus on your exam paper", next: "scene9" },
    ]
},

// Scene 7 - Report email as suspicious
scene7: {
img: "img/wd.gif",
    text: "Great choice! Reporting the email helps protect others from falling victim to the same attack. You're still in the game. What do you wanna do?",

        choices: [
        { text: "Red pill: Check if your system is updated", next: "scene8" },
        { text: "Blue pill: Delete the email", next: "badEnding2" },
        { text: "Hint", next: "keymaker3" },

    ]
},

keymaker3: {
    img: "img/keymaker.png",
    text: "The Keymaker appears: 'Your cybersecurity depends on your systems being up to date. If I could give one piece of advice, it would be to always keep your software up to date.'",

    choices: [
      {
        text: "Back",
        next: "scene7"
      }
    ]
  },


// Scene 8 - Check if system is updated
scene8: {
    img: "img/3svar.png",
    text: "Good that you updated the sytem! System updates often include security patches that protect against known vulnerabilities. The only thing is that you havn't really dealt with the email from the mysterious sender. Youre still in the game. What do you do?",

    choices: [
      { text: "Red pill: Message all of your classmates and tell them about the suspicious email", next: "scene10" },
      { text: "Blue pill: Delete the email", next: "badEnding2" },
      { text: "Green pill: You report the email as suspicious", next: "goodEnding2" }
    ]
  },

goodEnding1: {
  img: "img/bingo.png",
  text: "You managed to successfully keep your computer safe from cyberattacks! By reporting the email and ensuring your system is updated, you protected yourself and others from potential harm. Congratulations, you win!!",

  choices: [
    {
      text: "Play again",
      next: "characterSelect"
    }
  ]
},

goodEnding2: {
  img: "img/good1.png",
  text: "You are a cybersecurity master! Great job keeping your system updated and reporting the suspicious email. You know how to stay safe in the cyberworld! Congratulations, you win!!",

  choices: [
    {
      text: "Let's play again",
      next: "characterSelect"
    }
  ]
},


// Scene 9 - Keep ignoring the email
scene9: {
    img: "img/smithgif.gif",
    text: "Your system warns you about updates that havn't yet been installed. What do you do?",

    choices: [
      { text: "Red pill: You check your system for updates", next: "scene8" },
      { text: "Blue pill: You report the email as suspicious", next: "scene7" },
      { text: "Green pill: You delete the message. You are too buisy with your exam paper to pay attention to updates.", next: "badEnding2" },
      { text: "Hint", next: "keymaker4" },
    ]
  },

keymaker4: {
    img: "img/know.jpg",
    text: "The Keymaker appears: 'Software updates are essential for maintaining security.'",

    choices: [
      {
        text: "Back",
        next: "scene9"
      }
    ]
  },



 // Scene 10 - You warn your classmates 
scene10: {
    img: "img/smithgif.gif",
    text: "You write to all of your classmates and warn them about the suspicious email. It's a kind gesture. But you can still recieve suspicious emails from the same sender. What do you wanna do?",

    choices: [
      { text: "Red pill: You report the email as suspicious", next: "scene7" },
      { text: "Blue pill: You focus on your exam paper and ignore the email", next: "badEnding2" },

    ]

  },

// Scene 11 - Ignoring the email
scene11: {
    img: "img/smithgif.gif",
    text: "You notice that you keep receiving new emails from the same sender. What do you wanna do?",
  
    choices: [
      { text: "You delete them all", next: "badEnding2" },
      { text: "Blue pill: You are beginning to feel unsure about weather the email is legitimate, and youwant to take a look at it again", next: "scene3" },
      { text: "Green pill: You report the email as suspicious", next: "scene7" },
    ]
},

 badEnding2: {
  img: "img/as.jpg",
  text: "After a few days, you notice that your computer has become slower. Your pc didn't have the latest security updates wich made it vulnerable to a malware attack. Your computer has been infected with malware. Game over!",
  choices: [
    {
      text: "Restart game",
      next: "characterSelect"
    }
  ]
},

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


// 3. karaktervalg
  if (scene.type === "character") {

    const characterWrapper = document.createElement("div");

characterWrapper.classList.add("character-selection");

container.appendChild(characterWrapper);

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

    characterWrapper.appendChild(card);
  });
  }

// 4. Intro scener
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

// 5. Choices
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
