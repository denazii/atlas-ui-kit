/* ATLAS UI Kit — переключатель тем */

const root = document.documentElement;
const themeSelect = document.querySelector('#theme-select');
const demoAction = document.querySelector('#demo-action');
const demoFeedback = document.querySelector('#demo-feedback');

/* Функция применения темы */
function applyTheme(choice) {
  const valid = ['auto', 'light', 'dark'];
  if (!valid.includes(choice)) {
    choice = 'auto';
  }

  if (choice === 'auto') {
    root.removeAttribute('data-theme');
  } else {
    root.dataset.theme = choice;
  }

  if (themeSelect) {
    themeSelect.value = choice;
  }
}

/* Чтение сохранённой темы из localStorage */
function loadTheme() {
  let saved = 'auto';
  try {
    const stored = localStorage.getItem('atlas-theme');
    if (stored && ['auto', 'light', 'dark'].includes(stored)) {
      saved = stored;
    }
  } catch (e) {
    console.warn('localStorage недоступен, используется тема auto');
  }
  applyTheme(saved);
}

/* Сохранение выбора в localStorage */
function saveTheme(choice) {
  try {
    localStorage.setItem('atlas-theme', choice);
  } catch (e) {
    // Игнорируем ошибку
  }
}

/* Обработчик изменения select */
if (themeSelect) {
  themeSelect.addEventListener('change', (event) => {
    const choice = event.target.value;
    applyTheme(choice);
    saveTheme(choice);
  });
}

/* Запуск при загрузке страницы */
loadTheme();

/* Обратная связь от кнопки */
if (demoAction && demoFeedback) {
  demoAction.addEventListener('click', () => {
    demoFeedback.textContent = 'Демонстрация: действие выполнено, новая заявка создана.';
  });
}

/* ===== САМОСТОЯТЕЛЬНАЯ РАБОТА: переключатель плотности ===== */

const densitySelect = document.querySelector('#density-select');

function applyDensity(choice) {
  const valid = ['ordinary', 'compact'];
  if (!valid.includes(choice)) {
    choice = 'ordinary';
  }

  if (choice === 'ordinary') {
    root.removeAttribute('data-density');
  } else {
    root.dataset.density = choice;
  }

  if (densitySelect) {
    densitySelect.value = choice;
  }
}

function loadDensity() {
  let saved = 'ordinary';
  try {
    const stored = localStorage.getItem('atlas-density');
    if (stored && ['ordinary', 'compact'].includes(stored)) {
      saved = stored;
    }
  } catch (e) {
    console.warn('localStorage недоступен, используется плотность ordinary');
  }
  applyDensity(saved);
}

function saveDensity(choice) {
  try {
    localStorage.setItem('atlas-density', choice);
  } catch (e) {
    // Игнорируем ошибку
  }
}

if (densitySelect) {
  densitySelect.addEventListener('change', (event) => {
    const choice = event.target.value;
    applyDensity(choice);
    saveDensity(choice);
  });
}

loadDensity();