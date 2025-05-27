/**
 * 1. Utgå från 10 förolämpningar att använda
 * 2. Skapa ett objekt för varje förolämpning
 * 3. Varje objekt har två egenskaper - insult och play
 * 4. insult innehåller en sträng med förolämpningen, och play innehåller pjäsens namn
 * 5. Lägg alla objekt i en array
 * 6. Slumpa fram en förolämpning
 * 7. Lägg till en knapp där man kan slumpa fram en ny förolämpning
 */

let insults = [];

const insult1 = {
  insult:
    "Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner?",
  play: "Macbeth",
};

const insult2 = {
  insult: "Never hung poison on a fouler toad",
  play: "Richard III",
};

const insult3 = {
  insult: "He thinks too much: such men are dangerous.",
  play: "Julius Ceasar",
};

const insult4 = {
  insult:
    "Thou calledst me a dog before thou hadst a cause. But since I am a dog, beware my fangs.",
  play: "The Merchant of Venice",
};

const insult5 = {
  insult: "Give me your hand...I can tell your fortune. You are a fool.",
  play: "The Two Noble Kinsmen",
};

const insult6 = {
  insult:
    "He smells like a fish, a very ancient and fish-like smell, a kind of not-of-the-newest poor-John. A strange fish!",
  play: "The Tempest",
};

const insult7 = {
  insult:
    "It is a tale Told by an idiot, full of sound and fury, Signifying nothing.",
  play: "Macbeth",
};

const insult8 = {
  insult:
    "Alas, poor heart, that kiss is comfortless As frozen water to a starved snake.",
  play: "Titus Andronicus",
};

const insult9 = {
  insult:
    "He hath eaten me out of house and home; he hath put all substance into that fat belly of his.",
  play: "Henry IV, Part 2",
};

const insult10 = {
  insult: "Out, you green-sickness carrion! Out, you baggage! You tallow-face!",
  play: "Romeo and Juliet",
};

insults.push(
  insult1,
  insult2,
  insult3,
  insult4,
  insult5,
  insult6,
  insult7,
  insult8,
  insult9,
  insult10
);

// console.log(insults);

function randomNumber(max) {
  let randomNumberGenerator = Math.floor(Math.random() * max);
  return randomNumberGenerator;
}

let generatedRandomNumber = randomNumber(10);
// console.log(generatedRandomNumber);

if (generatedRandomNumber === 0) {
  console.log(insult1);
} else if (generatedRandomNumber === 1) {
  console.log(insult2);
} else if (generatedRandomNumber === 2) {
  console.log(insult3);
} else if (generatedRandomNumber === 3) {
  console.log(insult4);
} else if (generatedRandomNumber === 4) {
  console.log(insult5);
} else if (generatedRandomNumber === 5) {
  console.log(insult6);
} else if (generatedRandomNumber === 6) {
  console.log(insult7);
} else if (generatedRandomNumber === 7) {
  console.log(insult8);
} else if (generatedRandomNumber === 8) {
  console.log(insult9);
} else if (generatedRandomNumber === 9) {
  console.log(insult10);
}

// Nedan: Lägg till en knapp där man kan slumpa fram en ny förolämpning
// Fick handledningshjälp av Jesper med detta funktionsblock

document.querySelector(".niceButton").addEventListener("click", function () {
  // Nedan kallar jag på funktionen som genererar ett nummer mellan 0 och 9, och sparar den i variabeln random
  let random = randomNumber(10);
  // Nedan hämtas arrayen insults (där de 10 objekten med insults ligger), med tillhörande hakparenteser, inom vilken den nyss skapade variabeln random hämtar funktionen som genererar det mellan 0 och 9 slumpade talet. Värdet (numret) inom hakparenteserna refererar till objektets index-position, och pekar då på motsvarande objekt inom arrayen insults (t ex om numret blir 3 så pekas det 4:e objektet ut osv). På detta sätt väljs alltså ett slumpmässigt objekt inom arrayen ut, och detta sparar jag i variabeln insult.
  let insult = insults[random];
  // Loggar till sist insult.insult, där den förstnämnda hämtar den nyss skapade variabeln insult (för det framslumpade objektet), och där .insult sedan pekar på insult:, som är ett nyckelvärde som ligger i varje objekt, där varje förolämpning står utskriven. Genom detta hämtas den enskilda förolämpningen ur det aktuella objektet.
  console.log(insult.insult);
});

// Klart =)
