const valueA = document.getElementById('valueA');
const valueB = document.getElementById('valueB');
const operation = document.getElementById('operation');
const calculateBtn = document.getElementById('calculateBtn');
const resultSpan = document.getElementById('result');
const historyList = document.getElementById('historyList');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');

// Fonction pour calculer
async function calculate() {
  const a = valueA.value;
  const b = valueB.value;
  const op = operation.value;
  try {
    const response = await fetch('/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ a, b, operation: op })
    });
    const data = await response.json();
    resultSpan.textContent = data.result;
    await updateHistory();
  } catch (error) {
    console.error(error);
  }
}

// Fonction pour mettre à jour l’historique
async function updateHistory() {
  const response = await fetch('/history');
  const data = await response.json();
  historyList.innerHTML = '';
  data.history.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    historyList.appendChild(li);
  });
}

// Fonction pour effacer l’historique
async function clearHistory() {
  await fetch('/history', { method: 'DELETE' });
  resultSpan.textContent = '?';
  historyList.innerHTML = '';
}

calculateBtn.addEventListener('click', calculate);
clearHistoryBtn.addEventListener('click', clearHistory);