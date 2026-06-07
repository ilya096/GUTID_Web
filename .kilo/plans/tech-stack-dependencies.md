# План: Техническая спецификация и зависимости

## Выбранный стек (из интервью)
- **Three.js + React** — 3D рендеринг
- **WASM + ECS** — управление сценой
- **Webpack + TypeScript** — сборка
- **Простые коллизии** — без Rapier/Ammo
- **Zustand** — состояние
- **MUI** — UI компоненты
- **GitHub Pages** — хостинг

## Задачи

### 1. Создание package.json с зависимостями ✅
- three, react, react-dom
- @mui/material, zustand
- webpack, typescript

### 2. Webpack конфигурация ✅
- typescript/ts-loader
- поддержка gltf/glb ассетов
- dev server для разработки

### 3. Структура проекта ✅
- /src/components — UI
- /src/stores — Zustand

### 4. Feature spec для free_explore ✅
- Использован готовый шаблон GDD
- Зависит от hall_environment