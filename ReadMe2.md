
## Запуск

* `npm start` - сборка приложения для разработки. Открыть на  [http://localhost:19090](http://localhost:8080).
* `npm run build` - сборка приложения для production. Собранная версия доступна в папке `./dist`

`P.S.` бэк проксируется на http://10.116.239.183:9090


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
noUseComponent/ - не используемые компоненты, которые пригодятся в будущем
src/
 ├─ api/ ─ запросы к бэку по фичам и минимальная обработка ответа
 │   └─ auth.js/ ─ запросы касательно фичи авторизации
 │
 ├─ assets/ ─ вспомогательные файлы для верстки
 │   ├─ styles/ ─ обище стили для всего проекта
 │   ├─ images/ ─ картинки
 │   └─ fonts/ ─ шрифты
 │
 ├─ components/ ─ компоненты по фичам
 │   ├─ auth/ ─ фича "Авторизация"
 │   │   ├─ LoginForm.js ─ компонент только с рендором по props. Редко когда со state (тупой компонент)
 │   │   ├─ index.js ─ компонет только с логикой (контейнер)
 │   │   └─ styles.less ─ стили касательно только этой фичи
 │   ├─ common/ ─ общие переиспользуемые компоненты
 │   └─ goods/ ─ фича "Продукты"
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
 ├─ utils/ ─ общие функциии для переиспользования
 │
 ├─ App.js - корневой компонент с подключением роутинга и redux
 ├─ AppLayout.js - разметка главных элементов страницы
 ├─ Routing.js - файл со всеми роутами
 └─ store.js - создание store и подключение middleware 
 
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
  │   └─ common/ - папка с общими переиспользуемыми фичами
  ├─ routing/ ─ все что связано с роутингом
  ├─ utils/ ─ утилиты, общие функции, обертки
  ├─ store.js ─ инициализация store и middleware
  └─ index.js ─ корневое подключение
  
  

 
# Использование компонентов

Компоненты подключаются при помощи npm
через http://sbtnexus.ca.sbrf.ru:8081/nexus/content/groups/pprb_npm_group/
подключен в .npmrc
```
