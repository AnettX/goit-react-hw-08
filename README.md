# React + Vite. Redux та Redux Toolkit

## Перша частина ДЗ: Redux

1. npm create vite@latest
2. npm install axios
3. npm install react-router-dom
4. Деплой на Vercel: add vercel.json
5. Add Redux library to the project:

- npm install redux
- npm install react-redux

6. Redux DevTools: npm install @redux-devtools/extension
7. Створення store та підключення до проєкту: src/redux/store.js

<!-- ## Мінуси використання чистого Redux:

-зромісткість
-іммутабельний спосіб зміни даних -->

## Друга частина ДЗ: Redux Toolkit

Рефакторинг першої частини дз

1. Встановлення бібліотеки: npm install @reduxjs/toolkit
2. пакет базового редаксу видалити з dependencies package.json:
   npm uninstall @redux-devtools/extension
   npm uninstall redux
   !react-redux - залишається!
3. createSlice
4. Використання бібліотеки Redux Persist для збереження масиву контактів у локальному сховищі: npm install redux-persist

# Додатково:

Налаштування .eslintrc.cjs, до блоку rules додати властивість react/prop-types із значенням 0.
"react/prop-types": 0

---

<!-- # Алгоритм встановлення і роботи з редаксом.

1. Встановити бібліотеки redux and redux-toolkit
2. Створити store та підключити його до <Provider>...</Provider>
3. Створили базовий редьюсер та продумали його початковий стан (INITIAL_STATE).
4. Підписалися на дані з стору прямо в компоненті за допомогою (useSelector).
5. Продумали, як буде виглядати наш об'єкт інструкції(action) та що йому потрібно.
6. Отримали функцію dispatch за допомогою (useDispatch).
7. Надіслали об'єкт інструкції dispatch(action).
8. Прописали логіку опрацювання цієї інструкції в редьюсері.

store - це місце, де будуть зберігатися та опрауюватися дані (One source of truth).

dispatch - це функція, яка відправляє команду(action) в редьюсер.

action - це об'єкт, який має як мінімум містити поле type, може містити ще якусь
корисну інфомрацію в полі payload (об'єкт інстукції).

reducer - це чистя функція, яка приймає в себе state, action та повертає змінений,
або не змінений state. -->

---

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
