# Шаблон авторизации

Создан для быстрого начала работы с приложением использующем авторизацию 

# Начало работы

## node.js

Для разработки приложения должен быть установлен *node.js*. Актуальную версию можно скачать с официального сайта:

https://nodejs.org/en/download/current/

Или использовать node version manager(nvm) для более простого обновления и установки новых версий:

 * Windows: [nvm-windows](https://github.com/coreybutler/nvm-windows)
 * nix: [nvm](https://github.com/creationix/nvm)


## Запуск

* `npm start` - сборка приложения для разработки. Открыть на  [http://localhost:19090](http://localhost:8080).
* `npm run build` - сборка приложения для production. Собранная версия доступна в папке `./dist`

`P.S.` бэк проксируется на http://localhost:9992


## Используемые библиотеки

* [react](http://facebook.github.io/react/) - components
* [redux](http://redux.js.org/) - immutable store
* [lodash](https://lodash.com/) - a modern JavaScript utility library delivering modularity, performance & extras.
* [react-router](https://github.com/ReactTraining/react-router) and 
[react-router-redux](https://github.com/reactjs/react-router-redux) - declarative routing for React
* [redux-actions](https://github.com/redux-utilities/redux-actions) - flux Standard Action utilities for Redux.
* [eslint](https://eslint.org/) and [prettier](https://prettier.io/) - code style 

(конфиг преттира для ватчера или хоткея "--write --single-quote --no-semi --trailing-comma=es5 bracketSpacing: true $FilePathRelativeToProjectRoot$")

## Структура

```
 src/
  ├─ features/ ─ модули с фичами
  │   ├─ auth/(возможна вложенность дочернего компонента по ситуации) ─ модуль авторизации
  │   │   ├─ ducks ─ хранилище и обработка данных redux
  │   │   │   ├─ actions ─ экшены касательно данной фичи
  │   │   │   ├─ const ─ константы
  │   │   │   ├─ index.js ─ редьюсеры
  │   │   │   └─ selectors ─ селекторы
  │   │   ├─ api/(api.js) ─ запросы к бэку по фичам и минимальная обработка ответа
  │   │   ├─ ui/ ─ сам компонент рендеринг
  │   │   │   ├─ img/ ─ картинки для компонента
  │   │   │   ├─ styles/(styles.less) ─ стили для компонента
  │   │   │   ├─ index.js ─ контейнер
  │   │   │   └─ LoginPage.js ─ "глупый компонент"
  │   │   └─ test/ ─ тесты по компоненту
  │   ├─ ducks/ - сбор всех редьюсеров и общие функция для создания экшенов и редьюсеров
  │   └─ common/ - папка с общими переиспользуемыми фичами
  ├─ routing/ ─ все что связано с роутингом
  ├─ utils/ ─ утилиты, общие функции, обертки
  ├─ App.jsx ─ компонент оболочка для всех компонентов, с установкой роутов
  ├─ store.js ─ инициализация store и middleware
  └─ index.js ─ корневое подключение
  
```
