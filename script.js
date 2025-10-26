const display = document.getElementById('display');
const historyList = document.getElementById('historyList');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    const result = eval(display.value);
    addToHistory(display.value + ' = ' + result);
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}

function addToHistory(entry) {
  const item = document.createElement('div');
  item.className = 'history-item';
  item.textContent = entry;
  historyList.prepend(item);
}
