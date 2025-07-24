<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Ohm’s Law Simulation – Virtual Lab</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  <h1>Ohm’s Law Simulation</h1>

  <div class="sim-container">
    <label for="voltage">Voltage (V): <span id="vValue">5</span> V</label>
    <input type="range" id="voltage" min="0" max="20" value="5">

    <label for="resistance">Resistance (Ω): <span id="rValue">10</span> Ω</label>
    <input type="range" id="resistance" min="1" max="100" value="10">

    <div class="result">
      <p>Current (I = V/R): <strong><span id="current">0.5</span> A</strong></p>
    </div>

    <img src="assets/images/bulb.png" id="bulb" alt="Bulb">
  </div>

  <script src="assets/js/ohms-law.js"></script>
</body>
</html>
