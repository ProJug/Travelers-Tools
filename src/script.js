/**
 * script.js
 * - Tab switching with fade animations
 * - Converters (currency, temp, weight)
 * - Dark/light mode toggle
 */

// --- Dark/Light Mode Toggle ---
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  icon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark-mode');
  icon.classList.replace(
    isDark ? 'fa-moon' : 'fa-sun',
    isDark ? 'fa-sun' : 'fa-moon'
  );
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// --- Tab Switching with Animation ---
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => {
      p.classList.add('hidden');
      p.style.animation = 'none';
    });
    tab.classList.add('active');
    const panel = document.getElementById('panel-' + tab.id.replace('tab-', ''));
    panel.classList.remove('hidden');
    setTimeout(() => panel.style.animation = '', 10);
  });
});

// --- Currency Converter ---
const rates = { USD:1, EUR:0.85, GBP:0.75, JPY:110, CAD:1.25, AUD:1.35, CZK:22.00 };
document.getElementById('money-go').addEventListener('click', () => {
  const amt  = parseFloat(document.getElementById('money-amount').value) || 0;
  const from = document.getElementById('money-from').value;
  const to   = document.getElementById('money-to').value;
  const inUSD     = amt / rates[from];
  const converted = inUSD * rates[to];
  document.getElementById('money-result').textContent =
    `${amt.toFixed(2)} ${from} = ${converted.toFixed(2)} ${to}`;
});

// --- Temperature Converter ---
document.getElementById('temp-go').addEventListener('click', () => {
  const val  = parseFloat(document.getElementById('temp-input').value) || 0;
  const type = document.querySelector('input[name="temp-type"]:checked').value;
  const res  = type === 'FtoC'
    ? (val - 32) * (5/9)
    : (val * (9/5)) + 32;
  document.getElementById('temp-result').textContent =
    type === 'FtoC'
      ? `${val.toFixed(1)}°F = ${res.toFixed(1)}°C`
      : `${val.toFixed(1)}°C = ${res.toFixed(1)}°F`;
});

// --- Weight Converter ---
document.getElementById('weight-go').addEventListener('click', () => {
  const val  = parseFloat(document.getElementById('weight-input').value) || 0;
  const type = document.querySelector('input[name="weight-type"]:checked').value;
  const res  = type === 'lbtoKg'
    ? val * 0.453592
    : val / 0.453592;
  document.getElementById('weight-result').textContent =
    type === 'lbtoKg'
      ? `${val.toFixed(1)} lb = ${res.toFixed(1)} kg`
      : `${val.toFixed(1)} kg = ${res.toFixed(1)} lb`;
});
