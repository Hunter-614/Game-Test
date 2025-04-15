
let intensity = 1;
let novaVoiceEnabled = false;
let dialogueIndex = 0;

const dialogues = [
  "Let's turn up the heat...",
  "You're doing so well.",
  "Mmm, don't stop now.",
  "Can you handle more?",
  "NOVA is watching..."
];

function showScreen(id) {
  document.querySelectorAll('.screen, .main-menu').forEach(el => el.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function startSession() {
  showScreen('gameplay');
  intensity = 1;
  document.getElementById("intensity-label").innerText = "Intensity Level: " + intensity;
  document.getElementById("intensity-bar").value = intensity;
  nextDialogue();
  setInterval(() => {
    intensity = (intensity % 10) + 1;
    document.getElementById("intensity-label").innerText = "Intensity Level: " + intensity;
    document.getElementById("intensity-bar").value = intensity;
    nextDialogue();
    playMetronome();
  }, 5000);
}

function nextDialogue() {
  const line = dialogues[dialogueIndex % dialogues.length];
  document.getElementById("nova-dialogue").innerText = `"${line}"`;
  if (novaVoiceEnabled && 'speechSynthesis' in window) {
    const utter = new SpeechSynthesisUtterance(line);
    utter.pitch = 1.2;
    utter.rate = 0.95;
    utter.voice = speechSynthesis.getVoices().find(v => v.name.includes("Female")) || null;
    speechSynthesis.speak(utter);
  }
  dialogueIndex++;
}

function toggleVoice() {
  novaVoiceEnabled = document.getElementById("voiceToggle").checked;
}

function playMetronome() {
  const audio = document.getElementById("metronome");
  audio.currentTime = 0;
  audio.play();
}
