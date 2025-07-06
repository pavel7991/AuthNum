# Vite + SCSS Starter

Современный стартер для верстки на основе Vite с поддержкой SCSS, PostCSS и автоматической компиляцией стилей.

## 🚀 Особенности

- **Vite** - быстрый сборщик проектов
- **SCSS** - препроцессор для расширенной работы со стилями
- **PostCSS** - автоматическое добавление вендорных префиксов
- **Responsive Design** - готовые миксины для адаптивной верстки
- **Modular Architecture** - модульная структура SCSS файлов
- **Modern JavaScript** - ES6+ модули и классы
- **Prettier** - автоматическое форматирование кода

## 📁 Структура проекта

```
vite-scss-starter/
├── src/
│   ├── styles/
│   │   ├── blocks/           # Блоки страницы (header, footer, main-content)
│   │   │   ├── _header.scss
│   │   │   ├── _footer.scss
│   │   │   ├── _main-content.scss
│   │   │   └── _burger-button.scss
│   │   ├── components/       # Переиспользуемые компоненты
│   │   │   ├── _button.scss
│   │   │   └── _index.scss
│   │   ├── helpers/          # Вспомогательные файлы
│   │   │   ├── _variables.scss    # Переменные (цвета, шрифты, размеры)
│   │   │   ├── _mixins.scss       # Миксины для повторяющихся стилей
│   │   │   ├── _functions.scss    # SCSS функции (rem, fluid)
│   │   │   ├── _media.scss        # Медиа-запросы и брейкпоинты
│   │   │   └── index.scss
│   │   ├── _normalize.scss   # Сброс стилей браузера
│   │   ├── _fonts.scss       # Подключение шрифтов
│   │   ├── _utils.scss       # Утилитарные классы
│   │   ├── _globals.scss     # Глобальные стили
│   │   ├── styles.scss       # Главный файл стилей
│   │   ├── styles.css        # Скомпилированный CSS
│   │   └── styles.css.map    # Source map для отладки
│   ├── scripts/
│   │   ├── main.js           # Главный JavaScript файл
│   │   └── Header.js         # Класс для управления header
│   ├── images/               # Изображения
│   └── fonts/                # Шрифты
├── public/                   # Статические файлы
├── index.html               # Главная HTML страница
├── package.json             # Зависимости и скрипты
├── postcss.config.mjs       # Конфигурация PostCSS
├── .prettierrc             # Настройки форматирования
└── .gitignore              # Исключения для Git
```

## 🛠 Установка и запуск

### Предварительные требования

- Node.js (версия 16 или выше)
- npm или yarn

### Установка зависимостей

```bash
npm install
```

### Запуск в режиме разработки

```bash
npm run dev
```

Этот скрипт запускает:

- Vite dev server на `http://localhost:5173`
- Автоматическую компиляцию SCSS в CSS с watch режимом

### Другие команды

```bash
# Только компиляция SCSS с watch режимом
npm run watch:scss

# Добавление вендорных префиксов к CSS
npm run prefix

# Сборка для продакшена
npm run build

# Предварительный просмотр собранного проекта
npm run preview
```

## 🎨 SCSS Архитектура


### Переменные (`_variables.scss`)

```scss
// Цвета
$color-black: #030303;
$color-primary: #0ff;
$color-accent: #cf0e48;

// Размеры контейнера
:root {
	--container-width: #{rem(1280)};
	--container-padding-x: #{rem(40)};
}

// Шрифты
$font-family-base: 'OpenSans', sans-serif;

// Переходы
$transition-duration: 0.3s;
```

### Функции (`_functions.scss`)

- `rem($pixel)` - конвертация пикселей в rem
- `fluid($max, $min)` - создание адаптивных размеров с clamp()

### Миксины (`_mixins.scss`)

- `@mixin fluid-text($max, $min)` - адаптивный текст
- `@mixin flex-center($isInline)` - центрирование flex элементов
- `@mixin abs-center` - абсолютное центрирование
- `@mixin visually-hidden` - скрытие элементов для скринридеров
- `@mixin hide/show` - управление видимостью

### Медиа-запросы (`_media.scss`)

```scss
// Брейкпоинты
$laptop: 1200.98px;
$tablet: 768.98px;
$mobile: 400.98px;

// Миксины для медиа-запросов
@mixin tablet { @media (max-width: #{rem($tablet)}) { @content; } }
@mixin laptop { @media (max-width: #{rem($laptop)}) { @content; } }
@mixin mobile { @media (max-width: #{rem($mobile)}) { @content; } }

// Hover эффекты с поддержкой мобильных устройств
@mixin hover($hasActiveEffectOnMobile: true) { ... }
```

## 🔧 Конфигурация

### PostCSS (`postcss.config.mjs`)

```javascript
export default {
	plugins: {
		autoprefixer: {}
	}
}
```

### Browserslist (`package.json`)

```json
"browserslist": [
  "> 0.5%",
  "last 2 versions",
  "not dead",
  "not op_mini all"
]
```

### Prettier (`.prettierrc`)

```json
{
	"useTabs": true,
	"tabWidth": 2,
	"semi": false,
	"trailingComma": "none",
	"singleQuote": true,
	"printWidth": 80
}
```

## 📱 Адаптивная верстка

### Контейнер

```scss
.container {
	max-width: var(--container-width);
	margin: 0 auto;
	padding: 0 var(--container-padding-x);
}
```

### Адаптивные размеры

```scss
// Автоматическое масштабирование от 10px до 100px
.element {
	font-size: fluid(100, 10);
}

// Или через миксин
.element {
	@include fluid-text(100, 10);
}
```

### Медиа-запросы

```scss
.element {
	font-size: rem(16);

	@include tablet {
		font-size: rem(14);
	}

	@include mobile {
		font-size: rem(12);
	}
}
```

## 🎯 JavaScript

### Модульная архитектура

- ES6+ модули
- Классы для компонентов
- Data-атрибуты для селекторов

### Пример компонента (`Header.js`)

```javascript
class Header {
	selectors = {
		root: '[data-js-header]',
		overlay: '[data-js-header-overlay]',
		burgerButton: '[data-js-header-burger-button]'
	}

	stateClasses = {
		isActive: 'is-active',
		isLock: 'is-lock'
	}

	constructor() {
		this.init()
		this.bindEvents()
	}

	// ... методы компонента
}

export default Header
```

## 🚀 Рекомендации по использованию

### 1. Создание новых блоков

1. Создайте файл в `src/styles/blocks/_your-block.scss`
2. Добавьте импорт в `src/styles/styles.scss`
3. Используйте BEM методологию для именования классов

### 2. Добавление компонентов

1. Создайте файл в `src/styles/components/_your-component.scss`
2. Добавьте импорт в `src/styles/components/_index.scss`
3. Импортируйте `components` в `styles.scss`

### 3. Работа с изображениями

- Поместите изображения в `src/images/`
- Используйте относительные пути в CSS

### 4. Подключение шрифтов

- Поместите шрифты в `src/fonts/`
- Настройте подключение в `src/styles/_fonts.scss`

## 📦 Зависимости

### Основные

- **vite** (^7.0.0) - сборщик проектов
- **sass** (^1.89.2) - препроцессор SCSS

### PostCSS

- **postcss** (^8.5.6) - инструмент для обработки CSS
- **postcss-cli** (^11.0.1) - CLI для PostCSS
- **autoprefixer** (^10.4.21) - автоматические вендорные префиксы

### Утилиты

- **concurrently** (^9.2.0) - параллельный запуск команд

## 🔍 Отладка

### Source Maps

- SCSS компилируется с source maps для отладки
- Файл `styles.css.map` создается автоматически






---

**Создано для быстрого старта верстки с современными инструментами и лучшими практиками.**
