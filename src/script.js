/**
 * script.js
 * Contains all converter logic and tab switching.
 */

// --- Tab switching ---
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.add('hidden'));
    tab.classList.add('active');
    document.getElementById('panel-' + tab.id.replace('tab-', '')).classList.remove('hidden');
  });
});

// --- Currency Converter (hard‑coded rates relative to USD) ---
const rates = { USD: 1, EUR: 0.85, GBP: 0.75, JPY: 110, CAD: 1.25, AUD: 1.35 };
document.getElementById('money-go').addEventListener('click', () => {
  const amt = parseFloat(document.getElementById('money-amount').value) || 0;
  const from = document.getElementById('money-from').value;
  const to = document.getElementById('money-to').value;
  // convert to USD then to target
  const inUSD = amt / rates[from];
  const converted = inUSD * rates[to];
  document.getElementById('money-result').textContent =
    `${amt.toFixed(2)} ${from} = ${converted.toFixed(2)} ${to}`;
});

// --- Temperature Converter ---
document.getElementById('temp-go').addEventListener('click', () => {
  const val = parseFloat(document.getElementById('temp-input').value) || 0;
  const type = document.querySelector('input[name="temp-type"]:checked').value;
  let res;
  if (type === 'FtoC') {
    res = (val - 32) * (5/9);
    document.getElementById('temp-result').textContent = `${val.toFixed(1)}°F = ${res.toFixed(1)}°C`;
  } else {
    res = (val * (9/5)) + 32;
    document.getElementById('temp-result').textContent = `${val.toFixed(1)}°C = ${res.toFixed(1)}°F`;
  }
});

// --- Weight Converter ---
document.getElementById('weight-go').addEventListener('click', () => {
  const val = parseFloat(document.getElementById('weight-input').value) || 0;
  const type = document.querySelector('input[name="weight-type"]:checked').value;
  let res;
  if (type === 'lbtoKg') {
    res = val * 0.453592;
    document.getElementById('weight-result').textContent = `${val.toFixed(1)} lb = ${res.toFixed(1)} kg`;
  } else {
    res = val / 0.453592;
    document.getElementById('weight-result').textContent = `${val.toFixed(1)} kg = ${res.toFixed(1)} lb`;
  }
});
