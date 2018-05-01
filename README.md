# Шаблон авторизации

# Начало работы

## node.js

Для разработки приложения должен быть установлен *node.js*. Актуальную версию можно скачать с официального сайта:

https://nodejs.org/en/download/current/

Или использовать node version manager(nvm) для более простого обновления и установки новых версий:

 * Windows: [nvm-windows](https://github.com/coreybutler/nvm-windows)
 * nix: [nvm](https://github.com/creationix/nvm)


## Запуск

* `npm start` - сборка приложения для разработки. Открыть на  [http://localhost:8080](http://localhost:8080).
* `npm run build` - сборка приложения для production. Собранная версия доступна в папке `./dist`

## Используемые библиотеки

* [react](http://facebook.github.io/react/) - components
* [redux](http://redux.js.org/) - immutable store
* [lodash](https://lodash.com/) - a modern JavaScript utility library delivering modularity, performance & extras.
* [react-router](https://github.com/ReactTraining/react-router) and 
[react-router-redux](https://github.com/reactjs/react-router-redux) - declarative routing for React
* [redux-actions](https://github.com/redux-utilities/redux-actions) - flux Standard Action utilities for Redux.
* [redux-form](https://redux-form.com/7.3.0/) - The best way to manage your form state in Redux.

## Структура

```
src/
 ├─ api/ ─ запросы к бэку по фичам и минимальная обработка ответа
 │   └─ auth.js/ ─ запросы касательно фичи авторизации
 │
 ├─ assets/ ─ вспомогательные файлы для верстки
 │   ├─ styles/ ─ обище стили для всего проекта
 │   ├─ images/ ─ картинки
 │   └─ fonts/ ─ шрифты
 │
 ├─ ducks/ ─ хранилище и обработка данных redux
 │   ├─ auth/ ─ папка с названием фичи (тут авторизация)
 │   │   ├─ actions ─ экшены касательно данной фичи
 │   │   ├─ const ─ константы
 │   │   ├─ index.js ─ редьюсеры
 │   │   └─ selectors ─ селекторы
 │   ├─ shared/ ─ общие функции для создания экшенов и редьюсеров
 │   └─ index.js ─ компановка редьюсеров в один объект
 │
 ├─ ui/ ─ сами компоненты
 │   ├─ auth/ ─ папка с названием фичи (тут авторизация)
 │   │   ├─ authpage.js ─ компонент только с рендором по props. Редко когда со state (тупой компонент)
 │   │   ├─ index.js ─ компонет только с логикой (контейнер)
 │   │   └─ style.less ─ стили касательно только этой фичи
 │   └─ shared/ ─ общие компоненты для всего проекта
 │
 └─ utils/ ─ общие функциии для переиспользования

## Использование компонентов

Компоненты подключаются при помощи npm
Для импорта ufs-ui необходимо скинуть все необходимые плагины в node_modules
```
