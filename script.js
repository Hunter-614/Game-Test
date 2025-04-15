
document.querySelectorAll('.menu-button').forEach(button => {
  const hoverSound = document.getElementById('hoverSound');
  const clickSound = document.getElementById('clickSound');

  button.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });

  button.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});

// Connect Device Logic
async function connectDevice() {
  const connector = new Buttplug.ButtplugBrowserWebsocketClientConnector("ws://localhost:12345");
  const client = new Buttplug.ButtplugClient("Intensity Engine Client");
  try {
    await client.connect(connector);
    await client.startScanning();
    alert("Connected to Intiface Central!");
  } catch (err) {
    alert("Connection failed. Make sure Intiface Central is running.");
    console.error(err);
  }
}

document.getElementById("connectBtn").addEventListener("click", connectDevice);

document.getElementById("startBtn").addEventListener("click", () => {
  alert("Start Session clicked! (placeholder)");
});

document.getElementById("optionsBtn").addEventListener("click", () => {
  alert("Options clicked! (placeholder)");
});
