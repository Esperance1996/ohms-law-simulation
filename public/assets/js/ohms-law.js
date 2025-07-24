function calculateCurrent(voltage, resistance) {
  return resistance !== 0 ? voltage / resistance : 0;
}

document.addEventListener("DOMContentLoaded", () => {
  const voltageSlider = document.getElementById("voltage");
  const resistanceSlider = document.getElementById("resistance");
  const currentDisplay = document.getElementById("current");
  const vValue = document.getElementById("vValue");
  const rValue = document.getElementById("rValue");
  const bulb = document.getElementById("bulb");

  function updateSimulation() {
    const voltage = parseFloat(voltageSlider.value);
    const resistance = parseFloat(resistanceSlider.value);
    const current = calculateCurrent(voltage, resistance);

    vValue.textContent = voltage;
    rValue.textContent = resistance;
    currentDisplay.textContent = current.toFixed(2);

    // Glow bulb based on current
    if (current > 1) {
      bulb.style.filter = "brightness(200%)";
    } else if (current > 0.5) {
      bulb.style.filter = "brightness(130%)";
    } else {
      bulb.style.filter = "brightness(80%)";
    }
  }

  voltageSlider.addEventListener("input", updateSimulation);
  resistanceSlider.addEventListener("input", updateSimulation);
  updateSimulation();
});

// Export for testing
if (typeof module !== "undefined") {
  module.exports = { calculateCurrent };
}
