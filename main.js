"use strict";


console.log('#8. JavaScript homework example file')
console.log('Завдання #1. ....................................');
/*
 * Задача: Створення та додавання DOM-елемента до вказаного контейнера
 * Мета: Розробити функцію createDomElement, яка приймає назву тега, текстовий вміст та контейнер, до якого потрібно додати новий елемент. Функція створює новий елемент з вказаним тегом та текстовим вмістом і додає цей елемент до заданого контейнера.
 *
 * Вимоги:
 * 1. Функція має приймати три параметри:
 *    - tagName - рядок, що вказує на назву тега нового елемента.
 *    - textContent - рядок, що вказує на текстовий вміст нового елемента.
 *    - container - DOM-елемент, до якого буде додано новий створений елемент.
 * 2. Функція має створити новий DOM-елемент з вказаним тегом і текстовим вмістом.
 * 3. Створений елемент має бути доданий до вказаного контейнера.
 * 4. Функція повертає посилання на створений елемент, що дозволяє подальшу взаємодію з ним.
 * 5. Функція має бути експортована для використання в інших модулях та тестування.
 */


function createDomElement(tagName, textContent, container) {
  const newElement = document.createElement(tagName);
  newElement.textContent= textContent;
  container.appendChild(newElement);
}

// Демонстрація використання функції
const container = document.body; // В якості прикладу використовуємо body як контейнер
console.log(createDomElement('p', 'This paragraph has been added to the specified container.', container))


console.log('Завдання #2. ....................................');
/*
 * Задача: Встановлення cookie з корисною інформацією на 10 секунд
 * Мета: Розробити функцію setUserInfoCookie, яка встановлює cookie з ім'ям userInfo та значенням у форматі "ключ=значення", яке зберігає корисну інформацію про користувача (наприклад, обрану мову інтерфейсу) та має термін дії 10 секунд. Значення cookie повинно бути відповідно закодовано для безпечного зберігання у веб-браузері.
 *
 * Вимоги до функції:
 *
 * 1. Функція приймає два аргументи: key (назва інформаційного параметра) та value (значення параметра).
 * 2. Функція кодує значення параметра для коректного зберігання у cookie.
 * 3. Функція встановлює cookie userInfo з закодованим значенням "ключ=значення" та встановлює термін його дії на 10 секунд.
 * 4. При встановленні cookie, функція виводить інформаційне повідомлення у консоль про успішне зберігання даних.
 */
//setUserInfoCookie.js

function setUserInfoCookie(key, value) {
  let cookie1 = `${key}=${encodeURIComponent(value)}`; //Сохраняет пару имя/значение как cookie-набор, кодируя значение //с помощью encodeURIComponent () для отмены точек с запятой, // запятых и пробелов.
  //let cookie = encodeURIComponent(`${key}=${value}`);
  
  let date = new Date(Date.now() + 10*1000); //Метод Date.now() возвращает количество миллисекунд (1 сек=100 мс)
  date = date.toUTCString(); //Значение, возвращаемое методом toUTCString(), является строкой в формате Www, dd Mmm yyyy HH:mm:ss GMT

  document.cookie = ` ${cookie1}; expires=${date}; path=/; secure`;

  console.log(`Дані збережено успішно` );
}

// Демонстрація використання функції
setUserInfoCookie('language', 'en');
  


console.log('Завдання #3. ....................................');
/*
 * Задача: Робота з sessionStorage для зберігання та отримання даних користувача
 * Мета: Створити дві функції, saveUserInfo і getUserInfo, для взаємодії з sessionStorage. Перша функція повинна зберігати інформацію про користувача, а друга - отримувати її. Крім того, обидві функції повинні виводити відповідні повідомлення у консоль про успішне збереження або отримання даних.
 *
 * Вимоги до saveUserInfo:
 *
 * 1. Функція приймає два параметри: ключ (key) та значення (value).
 * 2. Зберігає пару ключ-значення в sessionStorage.
 * 3. Виводить у консоль повідомлення формату "Saved key: value".
 *
 * Вимоги до getUserInfo:
 *
 * 1. Функція приймає один параметр: ключ (key).
 * 2. Отримує значення за вказаним ключем з sessionStorage.
 * 3. Виводить у консоль повідомлення формату "Retrieved key: value", де value - це значення, отримане з sessionStorage.
 * 4. Повертає значення отримане з sessionStorage.
 */

function saveUserInfo(key, value) {
  localStorage.setItem(key, value);
  console.log ( `Saved ${key} : ${value}`);
}

function getUserInfo(key) {
  let value = localStorage.getItem(key);
  console.log(`Retrieved key: ${value}`);
  return value;
}

// Демонстрація використання функцій
saveUserInfo('username', 'JohnDoe');
console.log(getUserInfo('username')); // Виведе: JohnDoe -  // проблема с этим, почему в консоль выводит undefined???

//export { createDomElement, setUserInfoCookie, saveUserInfo, getUserInfo }